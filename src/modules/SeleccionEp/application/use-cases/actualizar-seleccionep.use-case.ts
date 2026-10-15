import { Inject, Injectable } from '@nestjs/common';
import type { SeleccionEpRepository } from '../../domain/ports/SeleccionEp.repository';
import { SeleccionEp } from '../../domain/entities/SeleccionEp.entity';

@Injectable()
export class actualizarSeleccionEpUseCase {
  constructor(
    @Inject('SeleccionEpRepository')
    private readonly repo: SeleccionEpRepository,
  ) {}

  async execute(
    id: string,
    data: {
      estado_proceso?: string;
      fecha_respuesta?: Date;
      verificacion_ficha?: string;
      resultado_verificacion_sgva?: string;
      fecha_verificacion?: Date;
      ruta_formato?: string;
      fecha_revision?: Date;
      fecha_migracion_sgva?: Date;
      observaciones?: string;
    },
  ): Promise<SeleccionEp> {
    const mapped: Partial<SeleccionEp> = {
      ...(data.estado_proceso && { estado_proceso: data.estado_proceso }),
      ...(data.fecha_respuesta && { fecha_respuesta: data.fecha_respuesta }),
      ...(data.verificacion_ficha && { verificacion_ficha: data.verificacion_ficha }),
      ...(data.resultado_verificacion_sgva && { resultado_verificacion_sgva: data.resultado_verificacion_sgva }),
      ...(data.fecha_verificacion && { fecha_verificacion: data.fecha_verificacion }),
      ...(data.ruta_formato && { ruta_formato: data.ruta_formato }),
      ...(data.fecha_revision && { fecha_revision: data.fecha_revision }),
      ...(data.fecha_migracion_sgva && { fecha_migracion_sgva: data.fecha_migracion_sgva }),
      ...(data.observaciones && { observaciones: data.observaciones }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
