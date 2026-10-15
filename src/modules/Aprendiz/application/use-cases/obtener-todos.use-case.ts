import { Inject, Injectable } from '@nestjs/common';
import type { AprendizRepository } from '../../domain/ports/Aprendiz.repository';
import { Aprendiz } from '../../domain/entities/Aprendiz.entity';

@Injectable()
export class ObtenerTodosAprendizUseCase {
  constructor(
    @Inject('AprendizRepository')
    private readonly repo: AprendizRepository,
  ) {}

  async execute(): Promise<Aprendiz[]> {
    return this.repo.obtenerTodos();
  }
}
