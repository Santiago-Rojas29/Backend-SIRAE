import { Inject, Injectable } from '@nestjs/common';
import type { SeleccionEpRepository } from '../../domain/ports/SeleccionEp.repository';
import { SeleccionEp } from '../../domain/entities/SeleccionEp.entity';

@Injectable()
export class CrearSeleccionEpUseCase {
  constructor(
    @Inject('SeleccionEpRepository')
    private readonly repo: SeleccionEpRepository,
  ) {}

  async execute(data: {
    matricula_id_FK: string;
    alternativa_id_FK: string;
    alternativa_original_id_FK?: string;
    estado_proceso: string;
    fecha_respuesta?: Date;
    verificacion_ficha?: string;
    resultado_verificacion_sgva?: string;
    fecha_verificacion?: Date;
    ruta_formato?: string;
    fecha_revision?: Date;
    fecha_migracion_sgva?: Date;
    observaciones?: string;
  }): Promise<SeleccionEp> {
    const entity = new SeleccionEp(
      '',
      data.matricula_id_FK,
      data.alternativa_id_FK,
      data.alternativa_original_id_FK ?? null,
      data.estado_proceso,
      data.fecha_respuesta,
      data.verificacion_ficha,
      data.resultado_verificacion_sgva,
      data.fecha_verificacion,
      data.ruta_formato,
      data.fecha_revision,
      data.fecha_migracion_sgva,
      data.observaciones,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
