import { Inject, Injectable } from '@nestjs/common';
import type { MatriculaRepository } from '../../domain/ports/Matricula.repository';
import { Matricula } from '../../domain/entities/Matricula.entity';

@Injectable()
export class ObtenerTodosMatriculaUseCase {
  constructor(
    @Inject('MatriculaRepository')
    private readonly repo: MatriculaRepository,
  ) {}

  async execute(): Promise<Matricula[]> {
    return this.repo.obtenerTodos();
  }
}
