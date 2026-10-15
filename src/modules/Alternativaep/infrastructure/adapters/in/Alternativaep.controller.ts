import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearAlternativaepUseCase } from '../../../application/use-cases/crear-alternativaep.use-case';
import { crearAlternativaepDto } from './dto/crear-alternativaep.dto';
import { actualizarAlternativaepDto } from './dto/actualizar-alternativaep.dto';
import { ActualizarAlternativaepUseCase } from 'src/modules/Alternativaep/application/use-cases/actualizar-alternativaep.use-case';
import { EliminarAlternativaepUseCase } from 'src/modules/Alternativaep/application/use-cases/eliminar-alternativaep.use-case';
import { ObtenerPorIdAlternativaepUseCase } from 'src/modules/Alternativaep/application/use-cases/obtener-por-id.use-case';
import { ObtenerTodosAlternativaepUseCase } from 'src/modules/Alternativaep/application/use-cases/obtener-todos.use-case';

@Controller('Alternativaep')
export class AlternativaepController {
  constructor(private readonly crearUseCase: CrearAlternativaepUseCase,
    private readonly actualizarUseCase:ActualizarAlternativaepUseCase,
    private readonly eliminarUseCase:EliminarAlternativaepUseCase,
    private readonly obtenerPorIdUseCase:ObtenerPorIdAlternativaepUseCase,
    private readonly obtenerTodosUseCase:ObtenerTodosAlternativaepUseCase
  ) {}

  @Post()
  crear(@Body() body: crearAlternativaepDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() body:actualizarAlternativaepDto){
    return this.actualizarUseCase.execute(id,body)
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.eliminarUseCase.execute(id)
  }

  @Get(':id')
  get(@Param('id') id:string){
    return this.obtenerPorIdUseCase.execute(id)
  }

  @Get()
  getAll(){
    return this.obtenerTodosUseCase.execute();
  }


}
