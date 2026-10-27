import { Inject, Injectable } from '@nestjs/common';
import type { JobDetalleRepository } from '../../domain/ports/JobDetalle.repository';

@Injectable()
export class eliminarJobDetalleUseCase {
  constructor(
    @Inject('JobDetalleRepository')
    private readonly repo: JobDetalleRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
