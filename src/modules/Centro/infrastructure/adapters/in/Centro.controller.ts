import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearCentroUseCase } from '../../../application/use-cases/crear-centro.use-case';
import { crearCentroDto } from './dto/crear-centro.dto';
import { actualizarCentroDto } from './dto/actualizar-centro.dto';
import { actualizarCentroUseCase } from 'src/modules/Centro/application/use-cases/actualizar-centro.use-case';
import { eliminarCentroUseCase } from 'src/modules/Centro/application/use-cases/eliminar-centro.use-case';
import { ObtenerTodosCentroUseCase } from 'src/modules/Centro/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdCentroUseCase } from 'src/modules/Centro/application/use-cases/obtener-por-id.use-case';

@Controller('Centro')
export class CentroController {
  constructor(private readonly crearUseCase: CrearCentroUseCase,
    private readonly actualizarUseCase:actualizarCentroUseCase,
    private readonly eliminarUseCase: eliminarCentroUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdCentroUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosCentroUseCase
  ) {}

  @Post()
  crear(@Body() body: crearCentroDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() body:actualizarCentroDto){
    return this.actualizarUseCase.execute(id,body)

  }

  @Delete(':id')
  delete(@Param('id') id:string){
    this.eliminarUseCase.execute(id)
  }

  @Get(':id')
  get(@Param('id') id:string ){
    return this.obtenerPorIdUseCase.execute(id)
  }

  @Get()
  getAll(){
    return this.obtenerTodosUseCase.execute()
  }
}
