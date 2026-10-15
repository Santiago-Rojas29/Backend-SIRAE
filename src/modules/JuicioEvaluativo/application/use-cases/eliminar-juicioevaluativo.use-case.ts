import { Inject, Injectable } from '@nestjs/common';
import type { JuicioEvaluativoRepository } from '../../domain/ports/JuicioEvaluativo.repository';

@Injectable()
export class eliminarJuicioEvaluativoUseCase {
  constructor(
    @Inject('JuicioEvaluativoRepository')
    private readonly repo: JuicioEvaluativoRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
