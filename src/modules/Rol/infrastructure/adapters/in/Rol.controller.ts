import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearRolUseCase } from '../../../application/use-cases/crear-rol.use-case';
import { crearRolDto } from './dto/crear-rol.dto';
import { actualizarRolDto } from './dto/actualizar-rol.dto';
import { actualizarRolUseCase } from '../../../application/use-cases/actualizar-rol.use-case';
import { eliminarRolUseCase } from '../../../application/use-cases/eliminar-rol.use-case';
import { ObtenerTodosRolUseCase } from '../../../application/use-cases/obtener-todos.use-case';
import { obtenerPorIdRolUseCase } from '../../../application/use-cases/obtener-por-id.use-case';

@Controller('Rol')
export class RolController {
  constructor(
    private readonly crearUseCase: CrearRolUseCase,
    private readonly actualizarUseCase: actualizarRolUseCase,
    private readonly eliminarUseCase: eliminarRolUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdRolUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosRolUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearRolDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarRolDto) {
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
