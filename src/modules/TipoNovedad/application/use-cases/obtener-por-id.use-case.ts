import { Inject, Injectable } from '@nestjs/common';
import type { TipoNovedadRepository } from '../../domain/ports/TipoNovedad.repository';
import { TipoNovedad } from '../../domain/entities/TipoNovedad.entity';

@Injectable()
export class obtenerPorIdTipoNovedadUseCase {
  constructor(
    @Inject('TipoNovedadRepository')
    private readonly repo: TipoNovedadRepository,
  ) {}

  async execute(id: string): Promise<TipoNovedad | null> {
    return this.repo.obtenerPorId(id);
  }
}
