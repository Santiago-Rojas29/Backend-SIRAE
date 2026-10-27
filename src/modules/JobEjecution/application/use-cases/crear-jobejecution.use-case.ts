import { Inject, Injectable } from '@nestjs/common';
import type { JobEjecutionRepository } from '../../domain/ports/JobEjecution.repository';
import { JobEjecution } from '../../domain/entities/JobEjecution.entity';

@Injectable()
export class CrearJobEjecutionUseCase {
  constructor(
    @Inject('JobEjecutionRepository')
    private readonly repo: JobEjecutionRepository,
  ) {}

  async execute(data: {
    usuario_id_FK: string;
    credencial_id_FK: string;
    tipo: string;
    disparado_por: string;
    estado: string;
    fecha_incio: Date;
    total_items?: number;
    items_procesados?: number;
    fecha_fin?: Date;
    errores?: string;
  }): Promise<JobEjecution> {
    const entity = new JobEjecution(
      '',
      data.usuario_id_FK,
      data.credencial_id_FK,
      data.tipo,
      data.disparado_por,
      data.estado,
      data.fecha_incio,
      data.total_items ?? 0,
      data.items_procesados ?? 0,
      data.fecha_fin,
      data.errores,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
