import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearNovedadUseCase } from '../../../application/use-cases/crear-novedad.use-case';
import { crearNovedadDto } from './dto/crear-novedad.dto';
import { actualizarNovedadDto } from './dto/actualizar-novedad.dto';
import { actualizarNovedadUseCase } from 'src/modules/Novedad/application/use-cases/actualizar-novedad.use-case';
import { eliminarNovedadUseCase } from 'src/modules/Novedad/application/use-cases/eliminar-novedad.use-case';
import { ObtenerTodosNovedadUseCase } from 'src/modules/Novedad/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdNovedadUseCase } from 'src/modules/Novedad/application/use-cases/obtener-por-id.use-case';

@Controller('Novedad')
export class NovedadController {
  constructor(
    private readonly crearUseCase: CrearNovedadUseCase,
    private readonly actualizarUseCase: actualizarNovedadUseCase,
    private readonly eliminarUseCase: eliminarNovedadUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdNovedadUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosNovedadUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearNovedadDto) {
    return this.crearUseCase.execute({
      ...body,
      fecha_novedad: new Date(body.fecha_novedad),
      fecha_registro_sofia: body.fecha_registro_sofia ? new Date(body.fecha_registro_sofia) : undefined,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarNovedadDto) {
    return this.actualizarUseCase.execute(id, {
      ...body,
      fecha_novedad: body.fecha_novedad ? new Date(body.fecha_novedad) : undefined,
      fecha_registro_sofia: body.fecha_registro_sofia ? new Date(body.fecha_registro_sofia) : undefined,
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
