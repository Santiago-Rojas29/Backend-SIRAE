import { Inject, Injectable } from '@nestjs/common';
import type { JobDetalleRepository } from '../../domain/ports/JobDetalle.repository';
import { JobDetalle } from '../../domain/entities/JobDetalle.entity';

@Injectable()
export class ObtenerTodosJobDetalleUseCase {
  constructor(
    @Inject('JobDetalleRepository')
    private readonly repo: JobDetalleRepository,
  ) {}

  async execute(): Promise<JobDetalle[]> {
    return this.repo.obtenerTodos();
  }
}
