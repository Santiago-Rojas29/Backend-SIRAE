import { Inject, Injectable } from '@nestjs/common';
import type { ArchivoProcesadoRepository } from '../../domain/ports/ArchivoProcesado.repository';

@Injectable()
export class eliminarArchivoProcesadoUseCase {
  constructor(
    @Inject('ArchivoProcesadoRepository')
    private readonly repo: ArchivoProcesadoRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
