import { Inject, Injectable } from '@nestjs/common';
import type { JobDetalleRepository } from '../../domain/ports/JobDetalle.repository';
import { JobDetalle } from '../../domain/entities/JobDetalle.entity';

@Injectable()
export class CrearJobDetalleUseCase {
  constructor(
    @Inject('JobDetalleRepository')
    private readonly repo: JobDetalleRepository,
  ) {}

  async execute(data: {
    job_ejecution_id_FK: string;
    matricula_id_FK?: string;
    ficha_id_FK?: string;
    referencia: string;
    resultado: string;
    mensaje: string;
  }): Promise<JobDetalle> {
    const entity = new JobDetalle(
      '',
      data.job_ejecution_id_FK,
      data.matricula_id_FK ?? null,
      data.ficha_id_FK ?? null,
      data.referencia,
      data.resultado,
      data.mensaje,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
