import { Inject, Injectable } from '@nestjs/common';
import type { RolPermisoRepository } from '../../domain/ports/RolPermiso.repository';
import { RolPermiso } from '../../domain/entities/RolPermiso.entity';

@Injectable()
export class CrearRolPermisoUseCase {
  constructor(
    @Inject('RolPermisoRepository')
    private readonly repo: RolPermisoRepository,
  ) {}

  async execute(data: { rol_id_FK: string; permiso_id_FK: string }): Promise<RolPermiso> {
    const entity = new RolPermiso('', data.rol_id_FK, data.permiso_id_FK);
    return this.repo.crear(entity);
  }
}
