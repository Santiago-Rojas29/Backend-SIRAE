import { Inject, Injectable } from '@nestjs/common';
import type { JobEjecutionRepository } from '../../domain/ports/JobEjecution.repository';

@Injectable()
export class eliminarJobEjecutionUseCase {
  constructor(
    @Inject('JobEjecutionRepository')
    private readonly repo: JobEjecutionRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
