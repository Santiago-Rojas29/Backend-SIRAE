import { Inject, Injectable } from '@nestjs/common';
import type { FichaRepository } from '../../domain/ports/Ficha.repository';
import { Ficha } from '../../domain/entities/Ficha.entity';

@Injectable()
export class ObtenerTodosFichaUseCase {
  constructor(
    @Inject('FichaRepository')
    private readonly repo: FichaRepository,
  ) {}

  async execute(): Promise<Ficha[]> {
    return this.repo.obtenerTodos();
  }
}
