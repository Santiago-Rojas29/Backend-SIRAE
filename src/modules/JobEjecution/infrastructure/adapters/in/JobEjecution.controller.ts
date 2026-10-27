import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearJobEjecutionUseCase } from '../../../application/use-cases/crear-jobejecution.use-case';
import { crearJobEjecutionDto } from './dto/crear-jobejecution.dto';
import { actualizarJobEjecutionDto } from './dto/actualizar-jobejecution.dto';
import { actualizarJobEjecutionUseCase } from 'src/modules/JobEjecution/application/use-cases/actualizar-jobejecution.use-case';
import { eliminarJobEjecutionUseCase } from 'src/modules/JobEjecution/application/use-cases/eliminar-jobejecution.use-case';
import { ObtenerTodosJobEjecutionUseCase } from 'src/modules/JobEjecution/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdJobEjecutionUseCase } from 'src/modules/JobEjecution/application/use-cases/obtener-por-id.use-case';

@Controller('JobEjecution')
export class JobEjecutionController {
  constructor(
    private readonly crearUseCase: CrearJobEjecutionUseCase,
    private readonly actualizarUseCase: actualizarJobEjecutionUseCase,
    private readonly eliminarUseCase: eliminarJobEjecutionUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdJobEjecutionUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosJobEjecutionUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearJobEjecutionDto) {
    return this.crearUseCase.execute({
      ...body,
      fecha_incio: new Date(body.fecha_incio),
      fecha_fin: body.fecha_fin ? new Date(body.fecha_fin) : undefined,
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarJobEjecutionDto) {
    return this.actualizarUseCase.execute(id, {
      ...body,
      fecha_fin: body.fecha_fin ? new Date(body.fecha_fin) : undefined,
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
