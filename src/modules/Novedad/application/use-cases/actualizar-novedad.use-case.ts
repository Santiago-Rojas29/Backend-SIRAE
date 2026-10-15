import { Inject, Injectable } from '@nestjs/common';
import type { NovedadRepository } from '../../domain/ports/Novedad.repository';
import { Novedad, EstadoRegistroNovedad } from '../../domain/entities/Novedad.entity';

@Injectable()
export class actualizarNovedadUseCase {
  constructor(
    @Inject('NovedadRepository')
    private readonly repo: NovedadRepository,
  ) {}

  async execute(
    id: string,
    data: {
      resolucion_id_FK?: string;
      fecha_novedad?: Date;
      solicitud_respondida?: boolean;
      estado_registro?: EstadoRegistroNovedad;
      fecha_registro_sofia?: Date;
      verificacion?: string;
      observaciones?: string;
    },
  ): Promise<Novedad> {
    const mapped: Partial<Novedad> = {
      ...(data.resolucion_id_FK !== undefined && { resolucion_id_FK: data.resolucion_id_FK }),
      ...(data.fecha_novedad && { fecha_novedad: data.fecha_novedad }),
      ...(data.solicitud_respondida !== undefined && { solicitud_respondida: data.solicitud_respondida }),
      ...(data.estado_registro && { estado_registro: data.estado_registro }),
      ...(data.fecha_registro_sofia !== undefined && { fecha_registro_sofia: data.fecha_registro_sofia }),
      ...(data.verificacion !== undefined && { verificacion: data.verificacion }),
      ...(data.observaciones !== undefined && { observaciones: data.observaciones }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
