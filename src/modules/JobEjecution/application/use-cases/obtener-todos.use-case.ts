import { Inject, Injectable } from '@nestjs/common';
import type { JobEjecutionRepository } from '../../domain/ports/JobEjecution.repository';
import { JobEjecution } from '../../domain/entities/JobEjecution.entity';

@Injectable()
export class ObtenerTodosJobEjecutionUseCase {
  constructor(
    @Inject('JobEjecutionRepository')
    private readonly repo: JobEjecutionRepository,
  ) {}

  async execute(): Promise<JobEjecution[]> {
    return this.repo.obtenerTodos();
  }
}
