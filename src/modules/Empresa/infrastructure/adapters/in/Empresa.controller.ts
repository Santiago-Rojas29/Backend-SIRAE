import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { crearEmpresaUseCase } from '../../../application/use-cases/crear-empresa.use-case';
import { crearEmpresaDto } from './dto/crear-empresa.dto';
import { actualizarEmpresaDto } from './dto/actualizar-empresa.dto';
import { actualizarEmpresaUseCase } from 'src/modules/Empresa/application/use-cases/actualizar-empresa.use-case';
import { eliminarEmpresaUseCase } from 'src/modules/Empresa/application/use-cases/eliminar-empresa.use-case';
import { obtenerEmpresaPorIdUseCase } from 'src/modules/Empresa/application/use-cases/obtener-por-id.use-case';
import { obtenerTodosEmpresasUseCase } from 'src/modules/Empresa/application/use-cases/obtener-todos.use-case';

@Controller('Empresa')
export class EmpresaController {
  constructor(private readonly crearUseCase: crearEmpresaUseCase,
    private readonly actualizarUseCase: actualizarEmpresaUseCase,
    private readonly eliminarUseCase:eliminarEmpresaUseCase,
    private readonly obtenerPorIdUseCase:obtenerEmpresaPorIdUseCase,
    private readonly obtenerTodosUseCase:obtenerTodosEmpresasUseCase
  ) {}

  @Post()
  crear(@Body() body: crearEmpresaDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() body:actualizarEmpresaDto){
    return this.actualizarUseCase.execute(id,body)
  }

  @Delete(':id')
  delete(@Param('id') id:string){
    return this.eliminarUseCase.execute(id)
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
