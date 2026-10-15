import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearSeleccionEpUseCase } from '../../../application/use-cases/crear-seleccionep.use-case';
import { crearSeleccionEpDto } from './dto/crear-seleccionep.dto';
import { actualizarSeleccionEpDto } from './dto/actualizar-seleccionep.dto';
import { actualizarSeleccionEpUseCase } from 'src/modules/SeleccionEp/application/use-cases/actualizar-seleccionep.use-case';
import { eliminarSeleccionEpUseCase } from 'src/modules/SeleccionEp/application/use-cases/eliminar-seleccionep.use-case';
import { ObtenerTodosSeleccionEpUseCase } from 'src/modules/SeleccionEp/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdSeleccionEpUseCase } from 'src/modules/SeleccionEp/application/use-cases/obtener-por-id.use-case';

function parseFechas<T extends { fecha_respuesta?: string; fecha_verificacion?: string; fecha_revision?: string; fecha_migracion_sgva?: string }>(
  body: T,
) {
  return {
    ...body,
    fecha_respuesta: body.fecha_respuesta ? new Date(body.fecha_respuesta) : undefined,
    fecha_verificacion: body.fecha_verificacion ? new Date(body.fecha_verificacion) : undefined,
    fecha_revision: body.fecha_revision ? new Date(body.fecha_revision) : undefined,
    fecha_migracion_sgva: body.fecha_migracion_sgva ? new Date(body.fecha_migracion_sgva) : undefined,
  };
}

@Controller('SeleccionEp')
export class SeleccionEpController {
  constructor(
    private readonly crearUseCase: CrearSeleccionEpUseCase,
    private readonly actualizarUseCase: actualizarSeleccionEpUseCase,
    private readonly eliminarUseCase: eliminarSeleccionEpUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdSeleccionEpUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosSeleccionEpUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearSeleccionEpDto) {
    return this.crearUseCase.execute(parseFechas(body));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarSeleccionEpDto) {
    return this.actualizarUseCase.execute(id, parseFechas(body));
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
