import { Inject, Injectable } from '@nestjs/common';
import type { ProgramaRepository } from '../../domain/ports/Programa.repository';
import { Programa } from '../../domain/entities/Programa.entity';

@Injectable()
export class ObtenerTodosProgramaUseCase {
  constructor(
    @Inject('ProgramaRepository')
    private readonly repo: ProgramaRepository,
  ) {}

  async execute(): Promise<Programa[]> {
    return this.repo.obtenerTodos();
  }
}
