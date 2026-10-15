import { Controller, Post, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { CrearEtapaProductivaUseCase } from '../../../application/use-cases/crear-etapaproductiva.use-case';
import { crearEtapaProductivaDto } from './dto/crear-etapaproductiva.dto';
import { actualizarEtapaProductivaDto } from './dto/actualizar-etapaproductiva.dto';
import { actualizarEtapaProductivaUseCase } from 'src/modules/EtapaProductiva/application/use-cases/actualizar-etapaproductiva.use-case';
import { eliminarEtapaProductivaUseCase } from 'src/modules/EtapaProductiva/application/use-cases/eliminar-etapaproductiva.use-case';
import { ObtenerTodosEtapaProductivaUseCase } from 'src/modules/EtapaProductiva/application/use-cases/obtener-todos.use-case';
import { obtenerPorIdEtapaProductivaUseCase } from 'src/modules/EtapaProductiva/application/use-cases/obtener-por-id.use-case';

function parseFechas<
  T extends {
    fecha_inicio?: string;
    fecha_fin?: string;
    fecha_remision_subdirector?: string;
    fecha_registro_sofia?: string;
  },
>(body: T) {
  return {
    ...body,
    fecha_inicio: body.fecha_inicio ? new Date(body.fecha_inicio) : undefined,
    fecha_fin: body.fecha_fin ? new Date(body.fecha_fin) : undefined,
    fecha_remision_subdirector: body.fecha_remision_subdirector ? new Date(body.fecha_remision_subdirector) : undefined,
    fecha_registro_sofia: body.fecha_registro_sofia ? new Date(body.fecha_registro_sofia) : undefined,
  };
}

@Controller('EtapaProductiva')
export class EtapaProductivaController {
  constructor(
    private readonly crearUseCase: CrearEtapaProductivaUseCase,
    private readonly actualizarUseCase: actualizarEtapaProductivaUseCase,
    private readonly eliminarUseCase: eliminarEtapaProductivaUseCase,
    private readonly obtenerPorIdUseCase: obtenerPorIdEtapaProductivaUseCase,
    private readonly obtenerTodosUseCase: ObtenerTodosEtapaProductivaUseCase,
  ) {}

  @Post()
  crear(@Body() body: crearEtapaProductivaDto) {
    return this.crearUseCase.execute(parseFechas(body));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: actualizarEtapaProductivaDto) {
    return this.actualizarUseCase.execute(id, parseFechas(body));
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
