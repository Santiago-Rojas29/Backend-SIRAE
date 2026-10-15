import { Inject, Injectable } from '@nestjs/common';
import type { EtapaProductivaRepository } from '../../domain/ports/EtapaProductiva.repository';
import { EtapaProductiva } from '../../domain/entities/EtapaProductiva.entity';

@Injectable()
export class ObtenerTodosEtapaProductivaUseCase {
  constructor(
    @Inject('EtapaProductivaRepository')
    private readonly repo: EtapaProductivaRepository,
  ) {}

  async execute(): Promise<EtapaProductiva[]> {
    return this.repo.obtenerTodos();
  }
}
