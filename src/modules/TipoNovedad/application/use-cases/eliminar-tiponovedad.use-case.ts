import { Inject, Injectable } from '@nestjs/common';
import type { TipoNovedadRepository } from '../../domain/ports/TipoNovedad.repository';

@Injectable()
export class eliminarTipoNovedadUseCase {
  constructor(
    @Inject('TipoNovedadRepository')
    private readonly repo: TipoNovedadRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
