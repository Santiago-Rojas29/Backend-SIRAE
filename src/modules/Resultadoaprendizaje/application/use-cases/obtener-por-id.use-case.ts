import { Inject, Injectable } from '@nestjs/common';
import type { ResultadoaprendizajeRepository } from '../../domain/ports/Resultadoaprendizaje.repository';
import { Resultadoaprendizaje } from '../../domain/entities/Resultadoaprendizaje.entity';

@Injectable()
export class obtenerPorIdResultadoaprendizajeUseCase {
  constructor(
    @Inject('ResultadoaprendizajeRepository')
    private readonly repo: ResultadoaprendizajeRepository,
  ) {}

  async execute(id: string): Promise<Resultadoaprendizaje | null> {
    return this.repo.obtenerPorId(id);
  }
}
