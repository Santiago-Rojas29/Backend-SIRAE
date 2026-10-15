import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearRegionalUseCase } from '../../../application/use-cases/crear-regional.use-case';
import { crearRegionalDto } from './dto/crear-regional.dto';
import { actualizarRegionalDto } from './dto/actualizar-regional.dto';
import { actualizarRegionalUseCase } from 'src/modules/Regional/application/use-cases/actualizar-regional.use-case';
import { elimiarRegionalUseCase } from 'src/modules/Regional/application/use-cases/eliminar-regional.use-case';
import { obtenerRegionalPorIdUseCase} from 'src/modules/Regional/application/use-cases/obtener-por-id.use-case';
import { obtenerRegionalTodoslUseCase } from 'src/modules/Regional/application/use-cases/obtener-todos.use-case';

@Controller('Regional')
export class RegionalController {
  constructor(private readonly crearUseCase: CrearRegionalUseCase,
    private readonly actualizarUseCase:actualizarRegionalUseCase,
    private readonly eliminarUseCase:elimiarRegionalUseCase,
    private readonly obtenerPorIdUseCase:obtenerRegionalPorIdUseCase,
    private readonly obtenerTodosUseCase:obtenerRegionalTodoslUseCase
  ) {}

  @Post()
  crear(@Body() body: crearRegionalDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() body:actualizarRegionalDto ){
    return this.actualizarUseCase.execute(id,body);
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
