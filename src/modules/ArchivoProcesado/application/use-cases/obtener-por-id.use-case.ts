import { Inject, Injectable } from '@nestjs/common';
import type { ArchivoProcesadoRepository } from '../../domain/ports/ArchivoProcesado.repository';
import { ArchivoProcesado } from '../../domain/entities/ArchivoProcesado.entity';

@Injectable()
export class obtenerPorIdArchivoProcesadoUseCase {
  constructor(
    @Inject('ArchivoProcesadoRepository')
    private readonly repo: ArchivoProcesadoRepository,
  ) {}

  async execute(id: string): Promise<ArchivoProcesado | null> {
    return this.repo.obtenerPorId(id);
  }
}
