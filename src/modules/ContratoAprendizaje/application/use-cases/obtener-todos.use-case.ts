import { Inject, Injectable } from '@nestjs/common';
import type { ContratoAprendizajeRepository } from '../../domain/ports/ContratoAprendizaje.repository';
import { ContratoAprendizaje } from '../../domain/entities/ContratoAprendizaje.entity';

@Injectable()
export class ObtenerTodosContratoAprendizajeUseCase {
  constructor(
    @Inject('ContratoAprendizajeRepository')
    private readonly repo: ContratoAprendizajeRepository,
  ) {}

  async execute(): Promise<ContratoAprendizaje[]> {
    return this.repo.obtenerTodos();
  }
}
