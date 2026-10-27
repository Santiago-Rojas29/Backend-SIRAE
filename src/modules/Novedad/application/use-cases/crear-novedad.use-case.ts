import { Inject, Injectable } from '@nestjs/common';
import type { NovedadRepository } from '../../domain/ports/Novedad.repository';
import { Novedad, EstadoRegistroNovedad } from '../../domain/entities/Novedad.entity';

@Injectable()
export class CrearNovedadUseCase {
  constructor(
    @Inject('NovedadRepository')
    private readonly repo: NovedadRepository,
  ) {}

  async execute(data: {
    matricula_id_FK: string;
    tipo_novedad_id_FK: string;
    fecha_novedad: Date;
    resolucion_id_FK?: string;
    solicitud_respondida?: boolean;
    estado_registro?: EstadoRegistroNovedad;
    fecha_registro_sofia?: Date;
    verificacion?: string;
    observaciones?: string;
  }): Promise<Novedad> {
    const entity = new Novedad(
      '',
      data.matricula_id_FK,
      data.tipo_novedad_id_FK,
      data.fecha_novedad,
      data.solicitud_respondida ?? false,
      data.estado_registro ?? EstadoRegistroNovedad.Pendiente,
      data.resolucion_id_FK,
      data.fecha_registro_sofia,
      data.verificacion,
      data.observaciones,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
