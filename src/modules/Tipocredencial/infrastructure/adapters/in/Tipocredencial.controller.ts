import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearTipocredencialUseCase } from '../../../application/use-cases/crear-tipocredencial.use-case';
import { crearTipocredencialDto } from './dto/crear-tipocredencial.dto';
import { actualizarTipocredencialDto } from './dto/actualizar-tipocredencial.dto';
import { ActualizarTipoCredencialUseCase } from 'src/modules/Tipocredencial/application/use-cases/actualizar-tipocredencial.use-case';
import { EliminarTipocredencialUseCase } from 'src/modules/Tipocredencial/application/use-cases/eliminar-tipocredencial.use-case';
import { ObtenerTipocredencialPorIdUseCase } from 'src/modules/Tipocredencial/application/use-cases/obtener-por-id.use-case';
import { ObtenerTodosTipocredencialUseCase } from 'src/modules/Tipocredencial/application/use-cases/obtener-todos.use-case';

@Controller('Tipocredencial')
export class TipocredencialController {
  constructor(private readonly crearUseCase: CrearTipocredencialUseCase,
    private readonly actualizarUseCase: ActualizarTipoCredencialUseCase,
    private readonly eliminarUseCase: EliminarTipocredencialUseCase,
    private readonly obtenerPorId:ObtenerTipocredencialPorIdUseCase,
    private readonly obtenerTodosUseCase:ObtenerTodosTipocredencialUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearTipocredencialDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id:string, @Body() data:actualizarTipocredencialDto){
    return this.actualizarUseCase.execute(id,data)
  }

  @Delete(':id')
  delete(@Param('id') id:string){
    return this.eliminarUseCase.execute(id)
  }

  @Get(':id')
  get(@Param('id') id:string){
    return this.obtenerPorId.execute(id)
  }

  @Get()
  getAll(){
    return this.obtenerTodosUseCase.execute()
  }
}
