import { Inject, Injectable } from '@nestjs/common';
import type { ResolucionRepository } from '../../domain/ports/Resolucion.repository';

@Injectable()
export class eliminarResolucionUseCase {
  constructor(
    @Inject('ResolucionRepository')
    private readonly repo: ResolucionRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
