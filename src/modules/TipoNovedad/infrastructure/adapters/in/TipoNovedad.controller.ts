import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearTipoNovedadUseCase } from '../../../application/use-cases/crear-tiponovedad.use-case';
import { crearTipoNovedadDto } from './dto/crear-tiponovedad.dto';
import { actualizarTipoNovedadDto } from './dto/actualizar-tiponovedad.dto';
import { actualizarTipoNovedadUseCase } from 'src/modules/TipoNovedad/application/use-cases/actualizar-tiponovedad.use-case';
import { eliminarTipoNovedadUseCase } from 'src/modules/TipoNovedad/application/use-cases/eliminar-tiponovedad.use-case';
import { ObtenerTodosTipoNovedadUseCase } from 'src/modules/TipoNovedad/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdTipoNovedadUseCase } from 'src/modules/TipoNovedad/application/use-cases/obtener-por-id.use-case';

@Controller('TipoNovedad')
export class TipoNovedadController {
  constructor(
    private readonly crearUseCase: CrearTipoNovedadUseCase,
    private readonly actualizarUseCase: actualizarTipoNovedadUseCase,
    private readonly eliminarUseCase: eliminarTipoNovedadUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdTipoNovedadUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosTipoNovedadUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearTipoNovedadDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarTipoNovedadDto) {
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
