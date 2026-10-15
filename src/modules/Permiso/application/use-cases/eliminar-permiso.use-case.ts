import { Inject, Injectable } from '@nestjs/common';
import type { PermisoRepository } from '../../domain/ports/Permiso.repository';

@Injectable()
export class eliminarPermisoUseCase {
  constructor(
    @Inject('PermisoRepository')
    private readonly repo: PermisoRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
