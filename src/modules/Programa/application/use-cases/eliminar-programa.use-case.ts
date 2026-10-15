import { Inject, Injectable } from '@nestjs/common';
import type { ProgramaRepository } from '../../domain/ports/Programa.repository';

@Injectable()
export class eliminarProgramaUseCase {
  constructor(
    @Inject('ProgramaRepository')
    private readonly repo: ProgramaRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
