import { Inject, Injectable } from '@nestjs/common';
import type { ResolucionRepository } from '../../domain/ports/Resolucion.repository';
import { Resolucion } from '../../domain/entities/Resolucion.entity';

@Injectable()
export class ObtenerTodosResolucionUseCase {
  constructor(
    @Inject('ResolucionRepository')
    private readonly repo: ResolucionRepository,
  ) {}

  async execute(): Promise<Resolucion[]> {
    return this.repo.obtenerTodos();
  }
}
