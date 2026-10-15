import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearPermisoUseCase } from '../../../application/use-cases/crear-permiso.use-case';
import { crearPermisoDto } from './dto/crear-permiso.dto';
import { actualizarPermisoDto } from './dto/actualizar-permiso.dto';
import { actualizarPermisoUseCase } from '../../../application/use-cases/actualizar-permiso.use-case';
import { eliminarPermisoUseCase } from '../../../application/use-cases/eliminar-permiso.use-case';
import { ObtenerTodosPermisoUseCase } from '../../../application/use-cases/obtener-todos.use-case';
import { obtenerPorIdPermisoUseCase } from '../../../application/use-cases/obtener-por-id.use-case';

@Controller('Permiso')
export class PermisoController {
  constructor(
    private readonly crearUseCase: CrearPermisoUseCase,
    private readonly actualizarUseCase: actualizarPermisoUseCase,
    private readonly eliminarUseCase: eliminarPermisoUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdPermisoUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosPermisoUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearPermisoDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarPermisoDto) {
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
