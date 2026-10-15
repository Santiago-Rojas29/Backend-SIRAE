import { Inject, Injectable } from '@nestjs/common';
import type { MatriculaRepository } from '../../domain/ports/Matricula.repository';

@Injectable()
export class eliminarMatriculaUseCase {
  constructor(
    @Inject('MatriculaRepository')
    private readonly repo: MatriculaRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
