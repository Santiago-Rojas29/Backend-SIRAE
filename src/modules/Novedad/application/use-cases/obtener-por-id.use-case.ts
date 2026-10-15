import { Inject, Injectable } from '@nestjs/common';
import type { NovedadRepository } from '../../domain/ports/Novedad.repository';
import { Novedad } from '../../domain/entities/Novedad.entity';

@Injectable()
export class obtenerPorIdNovedadUseCase {
  constructor(
    @Inject('NovedadRepository')
    private readonly repo: NovedadRepository,
  ) {}

  async execute(id: string): Promise<Novedad | null> {
    return this.repo.obtenerPorId(id);
  }
}
