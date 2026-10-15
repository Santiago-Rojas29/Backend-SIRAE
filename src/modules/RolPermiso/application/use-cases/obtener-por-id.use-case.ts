import { Inject, Injectable } from '@nestjs/common';
import type { RolPermisoRepository } from '../../domain/ports/RolPermiso.repository';
import { RolPermiso } from '../../domain/entities/RolPermiso.entity';

@Injectable()
export class obtenerPorIdRolPermisoUseCase {
  constructor(
    @Inject('RolPermisoRepository')
    private readonly repo: RolPermisoRepository,
  ) {}

  async execute(id: string): Promise<RolPermiso | null> {
    return this.repo.obtenerPorId(id);
  }
}
