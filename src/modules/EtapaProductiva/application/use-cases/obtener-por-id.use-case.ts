import { Inject, Injectable } from '@nestjs/common';
import type { EtapaProductivaRepository } from '../../domain/ports/EtapaProductiva.repository';
import { EtapaProductiva } from '../../domain/entities/EtapaProductiva.entity';

@Injectable()
export class obtenerPorIdEtapaProductivaUseCase {
  constructor(
    @Inject('EtapaProductivaRepository')
    private readonly repo: EtapaProductivaRepository,
  ) {}

  async execute(id: string): Promise<EtapaProductiva | null> {
    return this.repo.obtenerPorId(id);
  }
}
