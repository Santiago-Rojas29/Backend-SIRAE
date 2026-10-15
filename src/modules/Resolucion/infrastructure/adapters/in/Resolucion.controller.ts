import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearResolucionUseCase } from '../../../application/use-cases/crear-resolucion.use-case';
import { crearResolucionDto } from './dto/crear-resolucion.dto';
import { actualizarResolucionDto } from './dto/actualizar-resolucion.dto';
import { actualizarResolucionUseCase } from 'src/modules/Resolucion/application/use-cases/actualizar-resolucion.use-case';
import { eliminarResolucionUseCase } from 'src/modules/Resolucion/application/use-cases/eliminar-resolucion.use-case';
import { ObtenerTodosResolucionUseCase } from 'src/modules/Resolucion/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdResolucionUseCase } from 'src/modules/Resolucion/application/use-cases/obtener-por-id.use-case';

@Controller('Resolucion')
export class ResolucionController {
  constructor(
    private readonly crearUseCase: CrearResolucionUseCase,
    private readonly actualizarUseCase: actualizarResolucionUseCase,
    private readonly eliminarUseCase: eliminarResolucionUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdResolucionUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosResolucionUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearResolucionDto) {
    return this.crearUseCase.execute({
      ...body,
      fecha: new Date(body.fecha),
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarResolucionDto) {
    return this.actualizarUseCase.execute(id, {
      ...body,
      fecha: body.fecha ? new Date(body.fecha) : undefined,
    });
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
