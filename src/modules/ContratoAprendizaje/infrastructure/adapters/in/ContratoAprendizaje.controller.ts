import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearContratoAprendizajeUseCase } from '../../../application/use-cases/crear-contratoaprendizaje.use-case';
import { crearContratoAprendizajeDto } from './dto/crear-contratoaprendizaje.dto';
import { actualizarContratoAprendizajeDto } from './dto/actualizar-contratoaprendizaje.dto';
import { actualizarContratoAprendizajeUseCase } from 'src/modules/ContratoAprendizaje/application/use-cases/actualizar-contratoaprendizaje.use-case';
import { eliminarContratoAprendizajeUseCase } from 'src/modules/ContratoAprendizaje/application/use-cases/eliminar-contratoaprendizaje.use-case';
import { ObtenerTodosContratoAprendizajeUseCase } from 'src/modules/ContratoAprendizaje/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdContratoAprendizajeUseCase } from 'src/modules/ContratoAprendizaje/application/use-cases/obtener-por-id.use-case';

function parseFechas<T extends { fecha_inicio?: string; fecha_fin?: string; fecha_registro_sgva?: string }>(body: T) {
  return {
    ...body,
    fecha_inicio: body.fecha_inicio ? new Date(body.fecha_inicio) : undefined,
    fecha_fin: body.fecha_fin ? new Date(body.fecha_fin) : undefined,
    fecha_registro_sgva: body.fecha_registro_sgva ? new Date(body.fecha_registro_sgva) : undefined,
  };
}

@Controller('ContratoAprendizaje')
export class ContratoAprendizajeController {
  constructor(
    private readonly crearUseCase: CrearContratoAprendizajeUseCase,
    private readonly actualizarUseCase: actualizarContratoAprendizajeUseCase,
    private readonly eliminarUseCase: eliminarContratoAprendizajeUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdContratoAprendizajeUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosContratoAprendizajeUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearContratoAprendizajeDto) {
    return this.crearUseCase.execute(parseFechas(body));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarContratoAprendizajeDto) {
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
