import { Inject, Injectable } from '@nestjs/common';
import type { NovedadRepository } from '../../domain/ports/Novedad.repository';
import { Novedad } from '../../domain/entities/Novedad.entity';

@Injectable()
export class ObtenerTodosNovedadUseCase {
  constructor(
    @Inject('NovedadRepository')
    private readonly repo: NovedadRepository,
  ) {}

  async execute(): Promise<Novedad[]> {
    return this.repo.obtenerTodos();
  }
}
