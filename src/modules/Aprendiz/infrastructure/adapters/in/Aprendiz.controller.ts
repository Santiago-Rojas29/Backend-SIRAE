import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearAprendizUseCase } from '../../../application/use-cases/crear-aprendiz.use-case';
import { crearAprendizDto } from './dto/crear-aprendiz.dto';
import { actualizarAprendizDto } from './dto/actualizar-aprendiz.dto';
import { actualizarAprendizUseCase } from 'src/modules/Aprendiz/application/use-cases/actualizar-aprendiz.use-case';
import { eliminarAprendizUseCase } from 'src/modules/Aprendiz/application/use-cases/eliminar-aprendiz.use-case';
import { ObtenerTodosAprendizUseCase } from 'src/modules/Aprendiz/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdAprendizUseCase } from 'src/modules/Aprendiz/application/use-cases/obtener-por-id.use-case';

@Controller('Aprendiz')
export class AprendizController {
  constructor(
    private readonly crearUseCase: CrearAprendizUseCase,
    private readonly actualizarUseCase: actualizarAprendizUseCase,
    private readonly eliminarUseCase: eliminarAprendizUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdAprendizUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosAprendizUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearAprendizDto) {
    return this.crearUseCase.execute({
      ...body,
      fecha_nacimiento: body.fecha_nacimiento ? new Date(body.fecha_nacimiento) : undefined,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarAprendizDto) {
    return this.actualizarUseCase.execute(id, {
      ...body,
      fecha_nacimiento: body.fecha_nacimiento ? new Date(body.fecha_nacimiento) : undefined,
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
