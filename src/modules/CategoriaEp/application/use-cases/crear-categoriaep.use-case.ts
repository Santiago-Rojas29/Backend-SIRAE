import { Inject, Injectable } from '@nestjs/common';
import type { CategoriaEpRepository } from '../../domain/ports/CategoriaEp.repository';
import { CategoriaEp } from '../../domain/entities/CategoriaEp.entity';

@Injectable()
export class CrearCategoriaEpUseCase {
  constructor(
    @Inject('CategoriaEpRepository')
    private readonly repo: CategoriaEpRepository,
  ) {}

  async execute(data: { nombre: string; nombre_sofia: string }): Promise<CategoriaEp> {
    const entity = new CategoriaEp('', data.nombre, data.nombre_sofia);
    entity.validar();
    return this.repo.crear(entity);
  }
}
