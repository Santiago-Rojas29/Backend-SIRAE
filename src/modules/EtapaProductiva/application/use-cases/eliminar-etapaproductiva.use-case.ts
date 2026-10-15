import { Inject, Injectable } from '@nestjs/common';
import type { EtapaProductivaRepository } from '../../domain/ports/EtapaProductiva.repository';

@Injectable()
export class eliminarEtapaProductivaUseCase {
  constructor(
    @Inject('EtapaProductivaRepository')
    private readonly repo: EtapaProductivaRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
