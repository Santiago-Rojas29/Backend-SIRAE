import { Inject, Injectable } from '@nestjs/common';
import type { RolPermisoRepository } from '../../domain/ports/RolPermiso.repository';

@Injectable()
export class eliminarRolPermisoUseCase {
  constructor(
    @Inject('RolPermisoRepository')
    private readonly repo: RolPermisoRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
