import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearUsuarioRolUseCase } from '../../../application/use-cases/crear-usuariorol.use-case';
import { crearUsuarioRolDto } from './dto/crear-usuariorol.dto';
import { actualizarUsuarioRolDto } from './dto/actualizar-usuariorol.dto';
import { actualizarUsuarioRolUseCase } from '../../../application/use-cases/actualizar-usuariorol.use-case';
import { eliminarUsuarioRolUseCase } from '../../../application/use-cases/eliminar-usuariorol.use-case';
import { ObtenerTodosUsuarioRolUseCase } from '../../../application/use-cases/obtener-todos.use-case';
import { obtenerPorIdUsuarioRolUseCase } from '../../../application/use-cases/obtener-por-id.use-case';

@Controller('UsuarioRol')
export class UsuarioRolController {
  constructor(
    private readonly crearUseCase: CrearUsuarioRolUseCase,
    private readonly actualizarUseCase: actualizarUsuarioRolUseCase,
    private readonly eliminarUseCase: eliminarUsuarioRolUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdUsuarioRolUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosUsuarioRolUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearUsuarioRolDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarUsuarioRolDto) {
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
