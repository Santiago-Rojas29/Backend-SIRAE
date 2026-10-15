import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearMatriculaUseCase } from '../../../application/use-cases/crear-matricula.use-case';
import { crearMatriculaDto } from './dto/crear-matricula.dto';
import { actualizarMatriculaDto } from './dto/actualizar-matricula.dto';
import { actualizarMatriculaUseCase } from 'src/modules/Matricula/application/use-cases/actualizar-matricula.use-case';
import { eliminarMatriculaUseCase } from 'src/modules/Matricula/application/use-cases/eliminar-matricula.use-case';
import { ObtenerTodosMatriculaUseCase } from 'src/modules/Matricula/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdMatriculaUseCase } from 'src/modules/Matricula/application/use-cases/obtener-por-id.use-case';

@Controller('Matricula')
export class MatriculaController {
  constructor(
    private readonly crearUseCase: CrearMatriculaUseCase,
    private readonly actualizarUseCase: actualizarMatriculaUseCase,
    private readonly eliminarUseCase: eliminarMatriculaUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdMatriculaUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosMatriculaUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearMatriculaDto) {
    return this.crearUseCase.execute({
      ...body,
      fecha_inicio: body.fecha_inicio ? new Date(body.fecha_inicio) : undefined,
      fecha_actualizacion_sgva: body.fecha_actualizacion_sgva ? new Date(body.fecha_actualizacion_sgva) : undefined,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarMatriculaDto) {
    return this.actualizarUseCase.execute(id, {
      ...body,
      fecha_inicio: body.fecha_inicio ? new Date(body.fecha_inicio) : undefined,
      fecha_actualizacion_sgva: body.fecha_actualizacion_sgva ? new Date(body.fecha_actualizacion_sgva) : undefined,
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
