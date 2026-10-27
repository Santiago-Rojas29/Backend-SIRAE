import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearJobDetalleUseCase } from '../../../application/use-cases/crear-jobdetalle.use-case';
import { crearJobDetalleDto } from './dto/crear-jobdetalle.dto';
import { actualizarJobDetalleDto } from './dto/actualizar-jobdetalle.dto';
import { actualizarJobDetalleUseCase } from 'src/modules/JobDetalle/application/use-cases/actualizar-jobdetalle.use-case';
import { eliminarJobDetalleUseCase } from 'src/modules/JobDetalle/application/use-cases/eliminar-jobdetalle.use-case';
import { ObtenerTodosJobDetalleUseCase } from 'src/modules/JobDetalle/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdJobDetalleUseCase } from 'src/modules/JobDetalle/application/use-cases/obtener-por-id.use-case';

@Controller('JobDetalle')
export class JobDetalleController {
  constructor(
    private readonly crearUseCase: CrearJobDetalleUseCase,
    private readonly actualizarUseCase: actualizarJobDetalleUseCase,
    private readonly eliminarUseCase: eliminarJobDetalleUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdJobDetalleUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosJobDetalleUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearJobDetalleDto) {
    return this.crearUseCase.execute(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarJobDetalleDto) {
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
