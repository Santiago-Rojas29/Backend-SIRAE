import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearJuicioEvaluativoUseCase } from '../../../application/use-cases/crear-juicioevaluativo.use-case';
import { crearJuicioEvaluativoDto } from './dto/crear-juicioevaluativo.dto';
import { actualizarJuicioEvaluativoDto } from './dto/actualizar-juicioevaluativo.dto';
import { actualizarJuicioEvaluativoUseCase } from 'src/modules/JuicioEvaluativo/application/use-cases/actualizar-juicioevaluativo.use-case';
import { eliminarJuicioEvaluativoUseCase } from 'src/modules/JuicioEvaluativo/application/use-cases/eliminar-juicioevaluativo.use-case';
import { ObtenerTodosJuicioEvaluativoUseCase } from 'src/modules/JuicioEvaluativo/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdJuicioEvaluativoUseCase } from 'src/modules/JuicioEvaluativo/application/use-cases/obtener-por-id.use-case';

@Controller('JuicioEvaluativo')
export class JuicioEvaluativoController {
  constructor(
    private readonly crearUseCase: CrearJuicioEvaluativoUseCase,
    private readonly actualizarUseCase: actualizarJuicioEvaluativoUseCase,
    private readonly eliminarUseCase: eliminarJuicioEvaluativoUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdJuicioEvaluativoUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosJuicioEvaluativoUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearJuicioEvaluativoDto) {
    return this.crearUseCase.execute({
      ...body,
      fecha_hora: new Date(body.fecha_hora),
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarJuicioEvaluativoDto) {
    return this.actualizarUseCase.execute(id, {
      ...body,
      fecha_hora: body.fecha_hora ? new Date(body.fecha_hora) : undefined,
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
