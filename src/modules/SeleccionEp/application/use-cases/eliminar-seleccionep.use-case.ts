import { Inject, Injectable } from '@nestjs/common';
import type { SeleccionEpRepository } from '../../domain/ports/SeleccionEp.repository';

@Injectable()
export class eliminarSeleccionEpUseCase {
  constructor(
    @Inject('SeleccionEpRepository')
    private readonly repo: SeleccionEpRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
