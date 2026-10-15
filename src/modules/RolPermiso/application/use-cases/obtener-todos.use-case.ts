import { Inject, Injectable } from '@nestjs/common';
import type { RolPermisoRepository } from '../../domain/ports/RolPermiso.repository';
import { RolPermiso } from '../../domain/entities/RolPermiso.entity';

@Injectable()
export class ObtenerTodosRolPermisoUseCase {
  constructor(
    @Inject('RolPermisoRepository')
    private readonly repo: RolPermisoRepository,
  ) {}

  async execute(): Promise<RolPermiso[]> {
    return this.repo.obtenerTodos();
  }
}
