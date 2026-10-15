import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearRolPermisoUseCase } from '../../../application/use-cases/crear-rolpermiso.use-case';
import { crearRolPermisoDto } from './dto/crear-rolpermiso.dto';
import { actualizarRolPermisoDto } from './dto/actualizar-rolpermiso.dto';
import { actualizarRolPermisoUseCase } from '../../../application/use-cases/actualizar-rolpermiso.use-case';
import { eliminarRolPermisoUseCase } from '../../../application/use-cases/eliminar-rolpermiso.use-case';
import { ObtenerTodosRolPermisoUseCase } from '../../../application/use-cases/obtener-todos.use-case';
import { obtenerPorIdRolPermisoUseCase } from '../../../application/use-cases/obtener-por-id.use-case';

@Controller('RolPermiso')
export class RolPermisoController {
  constructor(
    private readonly crearUseCase: CrearRolPermisoUseCase,
    private readonly actualizarUseCase: actualizarRolPermisoUseCase,
    private readonly eliminarUseCase: eliminarRolPermisoUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdRolPermisoUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosRolPermisoUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearRolPermisoDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarRolPermisoDto) {
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
