import { Inject, Injectable } from '@nestjs/common';
import type { ResolucionRepository } from '../../domain/ports/Resolucion.repository';
import { Resolucion } from '../../domain/entities/Resolucion.entity';

@Injectable()
export class obtenerPorIdResolucionUseCase {
  constructor(
    @Inject('ResolucionRepository')
    private readonly repo: ResolucionRepository,
  ) {}

  async execute(id: string): Promise<Resolucion | null> {
    return this.repo.obtenerPorId(id);
  }
}
