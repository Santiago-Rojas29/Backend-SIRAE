import { Inject, Injectable } from '@nestjs/common';
import type { CategoriaEpRepository } from '../../domain/ports/CategoriaEp.repository';
import { CategoriaEp } from '../../domain/entities/CategoriaEp.entity';

@Injectable()
export class obtenerPorIdCategoriaEpUseCase {
  constructor(
    @Inject('CategoriaEpRepository')
    private readonly repo: CategoriaEpRepository,
  ) {}

  async execute(id: string): Promise<CategoriaEp | null> {
    return this.repo.obtenerPorId(id);
  }
}
