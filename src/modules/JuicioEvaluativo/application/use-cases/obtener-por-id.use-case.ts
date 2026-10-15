import { Inject, Injectable } from '@nestjs/common';
import type { JuicioEvaluativoRepository } from '../../domain/ports/JuicioEvaluativo.repository';
import { JuicioEvaluativo } from '../../domain/entities/JuicioEvaluativo.entity';

@Injectable()
export class obtenerPorIdJuicioEvaluativoUseCase {
  constructor(
    @Inject('JuicioEvaluativoRepository')
    private readonly repo: JuicioEvaluativoRepository,
  ) {}

  async execute(id: string): Promise<JuicioEvaluativo | null> {
    return this.repo.obtenerPorId(id);
  }
}
