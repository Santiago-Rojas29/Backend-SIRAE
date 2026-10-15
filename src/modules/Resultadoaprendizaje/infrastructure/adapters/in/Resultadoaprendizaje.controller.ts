import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearResultadoaprendizajeUseCase } from '../../../application/use-cases/crear-resultadoaprendizaje.use-case';
import { crearResultadoaprendizajeDto } from './dto/crear-resultadoaprendizaje.dto';
import { actualizarResultadoaprendizajeDto } from './dto/actualizar-resultadoaprendizaje.dto';
import { actualizarResultadoAprendizajeUseCase } from 'src/modules/Resultadoaprendizaje/application/use-cases/actualizar-resultadoaprendizaje.use-case';
import { eliminarResultadoAprendizajeUseCase } from 'src/modules/Resultadoaprendizaje/application/use-cases/eliminar-resultado-aprendizaje.use-case';
import { ObtenerTodosResultadoaprendizajeUseCase } from 'src/modules/Resultadoaprendizaje/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdResultadoaprendizajeUseCase } from 'src/modules/Resultadoaprendizaje/application/use-cases/obtener-por-id.use-case';

@Controller('Resultadoaprendizaje')
export class ResultadoaprendizajeController {
  constructor(
    private readonly crearUseCase: CrearResultadoaprendizajeUseCase,
    private readonly actualizarUseCase: actualizarResultadoAprendizajeUseCase,
    private readonly eliminarUseCase: eliminarResultadoAprendizajeUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdResultadoaprendizajeUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosResultadoaprendizajeUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearResultadoaprendizajeDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarResultadoaprendizajeDto) {
    return this.actualizarUseCase.execute(id, body);
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
