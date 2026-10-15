import { Inject, Injectable } from '@nestjs/common';
import type { ContratoAprendizajeRepository } from '../../domain/ports/ContratoAprendizaje.repository';
import { ContratoAprendizaje } from '../../domain/entities/ContratoAprendizaje.entity';

@Injectable()
export class obtenerPorIdContratoAprendizajeUseCase {
  constructor(
    @Inject('ContratoAprendizajeRepository')
    private readonly repo: ContratoAprendizajeRepository,
  ) {}

  async execute(id: string): Promise<ContratoAprendizaje | null> {
    return this.repo.obtenerPorId(id);
  }
}
