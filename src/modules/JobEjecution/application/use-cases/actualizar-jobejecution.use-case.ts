import { Inject, Injectable } from '@nestjs/common';
import type { JobEjecutionRepository } from '../../domain/ports/JobEjecution.repository';
import { JobEjecution } from '../../domain/entities/JobEjecution.entity';

@Injectable()
export class actualizarJobEjecutionUseCase {
  constructor(
    @Inject('JobEjecutionRepository')
    private readonly repo: JobEjecutionRepository,
  ) {}

  async execute(
    id: string,
    data: {
      estado?: string;
      total_items?: number;
      items_procesados?: number;
      fecha_fin?: Date;
      errores?: string;
    },
  ): Promise<JobEjecution> {
    const mapped: Partial<JobEjecution> = {
      ...(data.estado && { estado: data.estado }),
      ...(data.total_items !== undefined && { total_items: data.total_items }),
      ...(data.items_procesados !== undefined && { items_procesados: data.items_procesados }),
      ...(data.fecha_fin && { fecha_fin: data.fecha_fin }),
      ...(data.errores !== undefined && { errores: data.errores }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
