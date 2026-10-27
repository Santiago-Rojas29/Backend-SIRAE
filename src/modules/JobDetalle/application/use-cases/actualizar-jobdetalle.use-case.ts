import { Inject, Injectable } from '@nestjs/common';
import type { JobDetalleRepository } from '../../domain/ports/JobDetalle.repository';
import { JobDetalle } from '../../domain/entities/JobDetalle.entity';

@Injectable()
export class actualizarJobDetalleUseCase {
  constructor(
    @Inject('JobDetalleRepository')
    private readonly repo: JobDetalleRepository,
  ) {}

  async execute(
    id: string,
    data: {
      referencia?: string;
      resultado?: string;
      mensaje?: string;
    },
  ): Promise<JobDetalle> {
    const mapped: Partial<JobDetalle> = {
      ...(data.referencia && { referencia: data.referencia }),
      ...(data.resultado && { resultado: data.resultado }),
      ...(data.mensaje && { mensaje: data.mensaje }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
