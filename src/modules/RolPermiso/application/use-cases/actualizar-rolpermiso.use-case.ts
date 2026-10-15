import { Inject, Injectable } from '@nestjs/common';
import type { RolPermisoRepository } from '../../domain/ports/RolPermiso.repository';
import { RolPermiso } from '../../domain/entities/RolPermiso.entity';

@Injectable()
export class actualizarRolPermisoUseCase {
  constructor(
    @Inject('RolPermisoRepository')
    private readonly repo: RolPermisoRepository,
  ) {}

  async execute(
    id: string,
    data: { rol_id_FK?: string; permiso_id_FK?: string },
  ): Promise<RolPermiso> {
    const mapped: Partial<RolPermiso> = {
      ...(data.rol_id_FK && { rol_id_FK: data.rol_id_FK }),
      ...(data.permiso_id_FK && { permiso_id_FK: data.permiso_id_FK }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
