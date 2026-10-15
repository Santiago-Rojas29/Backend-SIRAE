import { Inject, Injectable } from '@nestjs/common';
import type { CategoriaEpRepository } from '../../domain/ports/CategoriaEp.repository';

@Injectable()
export class eliminarCategoriaEpUseCase {
  constructor(
    @Inject('CategoriaEpRepository')
    private readonly repo: CategoriaEpRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
