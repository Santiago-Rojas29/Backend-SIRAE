import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearCompetenciaUseCase } from '../../../application/use-cases/crear-competencia.use-case';
import { crearCompetenciaDto } from './dto/crear-competencia.dto';
import { actualizarCompetenciaDto } from './dto/actualizar-competencia.dto';
import { actualizarCompetenciaUseCase } from 'src/modules/Competencia/application/use-cases/actualizar-competencia.use-case';
import { eliminarCompetenciaUseCase } from 'src/modules/Competencia/application/use-cases/eliminar-competencia.use-case';
import { ObtenerTodosCompetenciaUseCase } from 'src/modules/Competencia/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdCompetenciaUseCase } from 'src/modules/Competencia/application/use-cases/obtener-por-id.use-case';

@Controller('Competencia')
export class CompetenciaController {
  constructor(
    private readonly crearUseCase: CrearCompetenciaUseCase,
    private readonly actualizarUseCase: actualizarCompetenciaUseCase,
    private readonly eliminarUseCase: eliminarCompetenciaUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdCompetenciaUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosCompetenciaUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearCompetenciaDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarCompetenciaDto) {
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
