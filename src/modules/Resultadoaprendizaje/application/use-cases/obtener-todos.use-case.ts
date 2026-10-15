import { Inject, Injectable } from '@nestjs/common';
import type { ResultadoaprendizajeRepository } from '../../domain/ports/Resultadoaprendizaje.repository';
import { Resultadoaprendizaje } from '../../domain/entities/Resultadoaprendizaje.entity';

@Injectable()
export class ObtenerTodosResultadoaprendizajeUseCase {
  constructor(
    @Inject('ResultadoaprendizajeRepository')
    private readonly repo: ResultadoaprendizajeRepository,
  ) {}

  async execute(): Promise<Resultadoaprendizaje[]> {
    return this.repo.obtenerTodos();
  }
}
