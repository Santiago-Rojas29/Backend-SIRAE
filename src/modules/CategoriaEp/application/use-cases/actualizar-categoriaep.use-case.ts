import { Inject, Injectable } from '@nestjs/common';
import type { CategoriaEpRepository } from '../../domain/ports/CategoriaEp.repository';
import { CategoriaEp } from '../../domain/entities/CategoriaEp.entity';

@Injectable()
export class actualizarCategoriaEpUseCase {
  constructor(
    @Inject('CategoriaEpRepository')
    private readonly repo: CategoriaEpRepository,
  ) {}

  async execute(
    id: string,
    data: {
      nombre?: string;
      nombre_sofia?: string;
    },
  ): Promise<CategoriaEp> {
    const mapped: Partial<CategoriaEp> = {
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.nombre_sofia && { nombre_sofia: data.nombre_sofia }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
