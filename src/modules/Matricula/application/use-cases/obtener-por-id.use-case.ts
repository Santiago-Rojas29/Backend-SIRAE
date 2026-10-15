import { Inject, Injectable } from '@nestjs/common';
import type { MatriculaRepository } from '../../domain/ports/Matricula.repository';
import { Matricula } from '../../domain/entities/Matricula.entity';

@Injectable()
export class obtenerPorIdMatriculaUseCase {
  constructor(
    @Inject('MatriculaRepository')
    private readonly repo: MatriculaRepository,
  ) {}

  async execute(id: string): Promise<Matricula | null> {
    return this.repo.obtenerPorId(id);
  }
}
