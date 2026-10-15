import { Inject, Injectable } from '@nestjs/common';
import type { CompetenciaRepository } from '../../domain/ports/Competencia.repository';
import { Competencia } from '../../domain/entities/Competencia.entity';

@Injectable()
export class obtenerPorIdCompetenciaUseCase {
  constructor(
    @Inject('CompetenciaRepository')
    private readonly repo: CompetenciaRepository,
  ) {}

  async execute(id: string): Promise<Competencia | null> {
    return this.repo.obtenerPorId(id);
  }
}
