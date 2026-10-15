import { Inject, Injectable } from '@nestjs/common';
import type { CategoriaEpRepository } from '../../domain/ports/CategoriaEp.repository';
import { CategoriaEp } from '../../domain/entities/CategoriaEp.entity';

@Injectable()
export class ObtenerTodosCategoriaEpUseCase {
  constructor(
    @Inject('CategoriaEpRepository')
    private readonly repo: CategoriaEpRepository,
  ) {}

  async execute(): Promise<CategoriaEp[]> {
    return this.repo.obtenerTodos();
  }
}
