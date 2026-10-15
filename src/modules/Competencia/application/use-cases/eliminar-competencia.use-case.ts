import { Inject, Injectable } from '@nestjs/common';
import type { CompetenciaRepository } from '../../domain/ports/Competencia.repository';

@Injectable()
export class eliminarCompetenciaUseCase {
  constructor(
    @Inject('CompetenciaRepository')
    private readonly repo: CompetenciaRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
