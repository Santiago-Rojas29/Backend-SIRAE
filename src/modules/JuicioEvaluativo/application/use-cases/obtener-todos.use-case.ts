import { Inject, Injectable } from '@nestjs/common';
import type { JuicioEvaluativoRepository } from '../../domain/ports/JuicioEvaluativo.repository';
import { JuicioEvaluativo } from '../../domain/entities/JuicioEvaluativo.entity';

@Injectable()
export class ObtenerTodosJuicioEvaluativoUseCase {
  constructor(
    @Inject('JuicioEvaluativoRepository')
    private readonly repo: JuicioEvaluativoRepository,
  ) {}

  async execute(): Promise<JuicioEvaluativo[]> {
    return this.repo.obtenerTodos();
  }
}
