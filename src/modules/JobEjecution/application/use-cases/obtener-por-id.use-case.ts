import { Inject, Injectable } from '@nestjs/common';
import type { JobEjecutionRepository } from '../../domain/ports/JobEjecution.repository';
import { JobEjecution } from '../../domain/entities/JobEjecution.entity';

@Injectable()
export class obtenerPorIdJobEjecutionUseCase {
  constructor(
    @Inject('JobEjecutionRepository')
    private readonly repo: JobEjecutionRepository,
  ) {}

  async execute(id: string): Promise<JobEjecution | null> {
    return this.repo.obtenerPorId(id);
  }
}
