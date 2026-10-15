import { Inject, Injectable } from '@nestjs/common';
import type { PermisoRepository } from '../../domain/ports/Permiso.repository';
import { Permiso } from '../../domain/entities/Permiso.entity';

@Injectable()
export class obtenerPorIdPermisoUseCase {
  constructor(
    @Inject('PermisoRepository')
    private readonly repo: PermisoRepository,
  ) {}

  async execute(id: string): Promise<Permiso | null> {
    return this.repo.obtenerPorId(id);
  }
}
