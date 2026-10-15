import { Inject, Injectable } from '@nestjs/common';
import type { SeleccionEpRepository } from '../../domain/ports/SeleccionEp.repository';
import { SeleccionEp } from '../../domain/entities/SeleccionEp.entity';

@Injectable()
export class obtenerPorIdSeleccionEpUseCase {
  constructor(
    @Inject('SeleccionEpRepository')
    private readonly repo: SeleccionEpRepository,
  ) {}

  async execute(id: string): Promise<SeleccionEp | null> {
    return this.repo.obtenerPorId(id);
  }
}
