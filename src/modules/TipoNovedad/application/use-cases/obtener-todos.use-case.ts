import { Inject, Injectable } from '@nestjs/common';
import type { TipoNovedadRepository } from '../../domain/ports/TipoNovedad.repository';
import { TipoNovedad } from '../../domain/entities/TipoNovedad.entity';

@Injectable()
export class ObtenerTodosTipoNovedadUseCase {
  constructor(
    @Inject('TipoNovedadRepository')
    private readonly repo: TipoNovedadRepository,
  ) {}

  async execute(): Promise<TipoNovedad[]> {
    return this.repo.obtenerTodos();
  }
}
