import { Inject, Injectable } from '@nestjs/common';
import type { ProgramaRepository } from '../../domain/ports/Programa.repository';
import { Programa } from '../../domain/entities/Programa.entity';

@Injectable()
export class obtenerPorIdProgramaUseCase {
  constructor(
    @Inject('ProgramaRepository')
    private readonly repo: ProgramaRepository,
  ) {}

  async execute(id: string): Promise<Programa | null> {
    return this.repo.obtenerPorId(id);
  }
}
