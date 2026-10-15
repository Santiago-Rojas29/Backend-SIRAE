import { Inject, Injectable } from '@nestjs/common';
import type { CompetenciaRepository } from '../../domain/ports/Competencia.repository';
import { Competencia } from '../../domain/entities/Competencia.entity';

@Injectable()
export class ObtenerTodosCompetenciaUseCase {
  constructor(
    @Inject('CompetenciaRepository')
    private readonly repo: CompetenciaRepository,
  ) {}

  async execute(): Promise<Competencia[]> {
    return this.repo.obtenerTodos();
  }
}
