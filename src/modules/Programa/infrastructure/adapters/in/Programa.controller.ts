import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearProgramaUseCase } from '../../../application/use-cases/crear-programa.use-case';
import { crearProgramaDto } from './dto/crear-programa.dto';
import { actualizarProgramaDto } from './dto/actualizar-programa.dto';
import { actualizarProgramaUseCase } from 'src/modules/Programa/application/use-cases/actualizar-programa.use-case';
import { eliminarProgramaUseCase } from 'src/modules/Programa/application/use-cases/eliminar-programa.use-case';
import { ObtenerTodosProgramaUseCase } from 'src/modules/Programa/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdProgramaUseCase } from 'src/modules/Programa/application/use-cases/obtener-por-id.use-case';

@Controller('Programa')
export class ProgramaController {
  constructor(
    private readonly crearUseCase: CrearProgramaUseCase,
    private readonly actualizarUseCase: actualizarProgramaUseCase,
    private readonly eliminarUseCase: eliminarProgramaUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdProgramaUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosProgramaUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearProgramaDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarProgramaDto) {
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
