import { Inject, Injectable } from '@nestjs/common';
import type { AprendizRepository } from '../../domain/ports/Aprendiz.repository';
import { Aprendiz } from '../../domain/entities/Aprendiz.entity';

@Injectable()
export class obtenerPorIdAprendizUseCase {
  constructor(
    @Inject('AprendizRepository')
    private readonly repo: AprendizRepository,
  ) {}

  async execute(id: string): Promise<Aprendiz | null> {
    return this.repo.obtenerPorId(id);
  }
}
