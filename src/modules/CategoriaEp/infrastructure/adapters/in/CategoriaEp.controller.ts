import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearCategoriaEpUseCase } from '../../../application/use-cases/crear-categoriaep.use-case';
import { crearCategoriaEpDto } from './dto/crear-categoriaep.dto';
import { actualizarCategoriaEpDto } from './dto/actualizar-categoriaep.dto';
import { actualizarCategoriaEpUseCase } from 'src/modules/CategoriaEp/application/use-cases/actualizar-categoriaep.use-case';
import { eliminarCategoriaEpUseCase } from 'src/modules/CategoriaEp/application/use-cases/eliminar-categoriaep.use-case';
import { ObtenerTodosCategoriaEpUseCase } from 'src/modules/CategoriaEp/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdCategoriaEpUseCase } from 'src/modules/CategoriaEp/application/use-cases/obtener-por-id.use-case';

@Controller('CategoriaEp')
export class CategoriaEpController {
  constructor(
    private readonly crearUseCase: CrearCategoriaEpUseCase,
    private readonly actualizarUseCase: actualizarCategoriaEpUseCase,
    private readonly eliminarUseCase: eliminarCategoriaEpUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdCategoriaEpUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosCategoriaEpUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearCategoriaEpDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarCategoriaEpDto) {
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
