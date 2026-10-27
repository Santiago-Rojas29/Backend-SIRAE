import { Inject, Injectable } from '@nestjs/common';
import type { ArchivoProcesadoRepository } from '../../domain/ports/ArchivoProcesado.repository';
import { ArchivoProcesado } from '../../domain/entities/ArchivoProcesado.entity';

@Injectable()
export class ObtenerTodosArchivoProcesadoUseCase {
  constructor(
    @Inject('ArchivoProcesadoRepository')
    private readonly repo: ArchivoProcesadoRepository,
  ) {}

  async execute(): Promise<ArchivoProcesado[]> {
    return this.repo.obtenerTodos();
  }
}
