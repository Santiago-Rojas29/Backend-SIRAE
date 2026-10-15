import { Inject, Injectable } from '@nestjs/common';
import type { TipoNovedadRepository } from '../../domain/ports/TipoNovedad.repository';
import { TipoNovedad } from '../../domain/entities/TipoNovedad.entity';

@Injectable()
export class actualizarTipoNovedadUseCase {
  constructor(
    @Inject('TipoNovedadRepository')
    private readonly repo: TipoNovedadRepository,
  ) {}

  async execute(
    id: string,
    data: {
      codigo?: string;
      nombre?: string;
      descripcion?: string;
    },
  ): Promise<TipoNovedad> {
    const mapped: Partial<TipoNovedad> = {
      ...(data.codigo && { codigo: data.codigo }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.descripcion && { descripcion: data.descripcion }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
