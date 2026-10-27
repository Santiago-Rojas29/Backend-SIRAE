import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearArchivoProcesadoUseCase } from '../../../application/use-cases/crear-archivoprocesado.use-case';
import { crearArchivoProcesadoDto } from './dto/crear-archivoprocesado.dto';
import { actualizarArchivoProcesadoDto } from './dto/actualizar-archivoprocesado.dto';
import { actualizarArchivoProcesadoUseCase } from 'src/modules/ArchivoProcesado/application/use-cases/actualizar-archivoprocesado.use-case';
import { eliminarArchivoProcesadoUseCase } from 'src/modules/ArchivoProcesado/application/use-cases/eliminar-archivoprocesado.use-case';
import { ObtenerTodosArchivoProcesadoUseCase } from 'src/modules/ArchivoProcesado/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdArchivoProcesadoUseCase } from 'src/modules/ArchivoProcesado/application/use-cases/obtener-por-id.use-case';

@Controller('ArchivoProcesado')
export class ArchivoProcesadoController {
  constructor(
    private readonly crearUseCase: CrearArchivoProcesadoUseCase,
    private readonly actualizarUseCase: actualizarArchivoProcesadoUseCase,
    private readonly eliminarUseCase: eliminarArchivoProcesadoUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdArchivoProcesadoUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosArchivoProcesadoUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearArchivoProcesadoDto) {
    return this.crearUseCase.execute({
      ...body,
      fecha_procesamiento: new Date(body.fecha_procesamiento),
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarArchivoProcesadoDto) {
    return this.actualizarUseCase.execute(id, {
      ...body,
      fecha_procesamiento: body.fecha_procesamiento ? new Date(body.fecha_procesamiento) : undefined,
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
