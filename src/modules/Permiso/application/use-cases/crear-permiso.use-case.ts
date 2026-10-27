import { Inject, Injectable } from '@nestjs/common';
import type { PermisoRepository } from '../../domain/ports/Permiso.repository';
import { Permiso } from '../../domain/entities/Permiso.entity';

@Injectable()
export class CrearPermisoUseCase {
  constructor(
    @Inject('PermisoRepository')
    private readonly repo: PermisoRepository,
  ) {}

  async execute(data: { modulo: string; accion: string; descripcion: string }): Promise<Permiso> {
    const entity = new Permiso('', data.modulo, data.accion, data.descripcion);
    entity.validar();
    return this.repo.crear(entity);
  }
}
