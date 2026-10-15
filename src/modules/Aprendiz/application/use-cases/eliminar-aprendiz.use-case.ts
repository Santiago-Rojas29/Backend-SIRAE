import { Inject, Injectable } from '@nestjs/common';
import type { AprendizRepository } from '../../domain/ports/Aprendiz.repository';

@Injectable()
export class eliminarAprendizUseCase {
  constructor(
    @Inject('AprendizRepository')
    private readonly repo: AprendizRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
