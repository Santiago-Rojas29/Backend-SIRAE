import { Inject, Injectable } from '@nestjs/common';
import type { TipoNovedadRepository } from '../../domain/ports/TipoNovedad.repository';
import { TipoNovedad } from '../../domain/entities/TipoNovedad.entity';

@Injectable()
export class CrearTipoNovedadUseCase {
  constructor(
    @Inject('TipoNovedadRepository')
    private readonly repo: TipoNovedadRepository,
  ) {}

  async execute(data: { codigo: string; nombre: string; descripcion: string }): Promise<TipoNovedad> {
    const entity = new TipoNovedad('', data.codigo, data.nombre, data.descripcion);
    return this.repo.crear(entity);
  }
}
