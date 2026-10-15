import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CrearUsuarioUseCase } from '../../../application/use-cases/crear-usuario.use-case';
import { crearUsuarioDto } from './dto/crear-usuario.dto';
import { actualizarUsuarioUseCase } from 'src/modules/Usuario/application/use-cases/actualizar-usuario.use-case';
import { eliminarUsuarioUseCase } from 'src/modules/Usuario/application/use-cases/eliminar-usuario.use-case';
import { obtenerUsuarioPorIdUseCase } from 'src/modules/Usuario/application/use-cases/obtener-por-id.use-case';
import { obtenerTodosUsuarioUseCase } from 'src/modules/Usuario/application/use-cases/obtener-todos.use-case';
import { actualizarUsuarioDto } from './dto/actualizar-usuario.dto';

@Controller('Usuario')
export class UsuarioController {
  constructor(private readonly crearUseCase: CrearUsuarioUseCase,
    private readonly actualizarUseCase: actualizarUsuarioUseCase,
    private readonly eliminnarUseCase: eliminarUsuarioUseCase,
    private readonly obtenerPorIdUseCase: obtenerUsuarioPorIdUseCase,
    private readonly obtenerTodosUseCase:obtenerTodosUsuarioUseCase
  ) {}

  @Post()
  crear(@Body() body: crearUsuarioDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() data:actualizarUsuarioDto){
    return this.actualizarUseCase.execute(id,data)
  }

  @Delete(':id')
  delete(@Param('id') id:string){
    return this.eliminnarUseCase.execute(id)
  }

  @Get(':id')
  get(@Param('id') id:string){
    return this.obtenerPorIdUseCase.execute(id)
  }

  @Get()
  getAll(){
    return this.obtenerTodosUseCase.execute()
  }
  
}


