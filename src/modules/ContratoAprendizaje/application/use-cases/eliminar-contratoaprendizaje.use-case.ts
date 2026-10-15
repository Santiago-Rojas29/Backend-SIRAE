import { Inject, Injectable } from '@nestjs/common';
import type { ContratoAprendizajeRepository } from '../../domain/ports/ContratoAprendizaje.repository';

@Injectable()
export class eliminarContratoAprendizajeUseCase {
  constructor(
    @Inject('ContratoAprendizajeRepository')
    private readonly repo: ContratoAprendizajeRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
