import { Inject, Injectable } from '@nestjs/common';
import type { PermisoRepository } from '../../domain/ports/Permiso.repository';
import { Permiso } from '../../domain/entities/Permiso.entity';

@Injectable()
export class actualizarPermisoUseCase {
  constructor(
    @Inject('PermisoRepository')
    private readonly repo: PermisoRepository,
  ) {}

  async execute(
    id: string,
    data: { modulo?: string; accion?: string; descripcion?: string },
  ): Promise<Permiso> {
    const mapped: Partial<Permiso> = {
      ...(data.modulo && { modulo: data.modulo }),
      ...(data.accion && { accion: data.accion }),
      ...(data.descripcion && { descripcion: data.descripcion }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
