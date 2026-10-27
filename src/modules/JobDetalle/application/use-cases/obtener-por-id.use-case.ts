import { Inject, Injectable } from '@nestjs/common';
import type { JobDetalleRepository } from '../../domain/ports/JobDetalle.repository';
import { JobDetalle } from '../../domain/entities/JobDetalle.entity';

@Injectable()
export class obtenerPorIdJobDetalleUseCase {
  constructor(
    @Inject('JobDetalleRepository')
    private readonly repo: JobDetalleRepository,
  ) {}

  async execute(id: string): Promise<JobDetalle | null> {
    return this.repo.obtenerPorId(id);
  }
}
