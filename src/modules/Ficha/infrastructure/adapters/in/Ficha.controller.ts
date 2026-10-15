import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearFichaUseCase } from '../../../application/use-cases/crear-ficha.use-case';
import { crearFichaDto } from './dto/crear-ficha.dto';
import { actualizarFichaDto } from './dto/actualizar-ficha.dto';
import { actualizarFichaUseCase } from 'src/modules/Ficha/application/use-cases/actualizar-ficha.use-case';
import { eliminarFichaUseCase } from 'src/modules/Ficha/application/use-cases/eliminar-ficha.use-case';
import { ObtenerTodosFichaUseCase } from 'src/modules/Ficha/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdFichaUseCase } from 'src/modules/Ficha/application/use-cases/obtener-por-id.use-case';

@Controller('Ficha')
export class FichaController {
  constructor(
    private readonly crearUseCase: CrearFichaUseCase,
    private readonly actualizarUseCase: actualizarFichaUseCase,
    private readonly eliminarUseCase: eliminarFichaUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdFichaUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosFichaUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearFichaDto) {
    return this.crearUseCase.execute({
      ...body,
      fecha_inicio: body.fecha_inicio ? new Date(body.fecha_inicio) : undefined,
      fecha_fin: body.fecha_fin ? new Date(body.fecha_fin) : undefined,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarFichaDto) {
    return this.actualizarUseCase.execute(id, {
      ...body,
      fecha_inicio: body.fecha_inicio ? new Date(body.fecha_inicio) : undefined,
      fecha_fin: body.fecha_fin ? new Date(body.fecha_fin) : undefined,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.eliminarUseCase.execute(id);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.obtenerPorIdUseCase.execute(id);
  }

  @Get()
  getAll() {
    return this.obtenerTodosUseCase.execute();
  }
}
