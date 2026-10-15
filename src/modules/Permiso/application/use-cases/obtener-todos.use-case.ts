import { Inject, Injectable } from '@nestjs/common';
import type { PermisoRepository } from '../../domain/ports/Permiso.repository';
import { Permiso } from '../../domain/entities/Permiso.entity';

@Injectable()
export class ObtenerTodosPermisoUseCase {
  constructor(
    @Inject('PermisoRepository')
    private readonly repo: PermisoRepository,
  ) {}

  async execute(): Promise<Permiso[]> {
    return this.repo.obtenerTodos();
  }
}
