import { Inject, Injectable } from '@nestjs/common';
import type { RolRepository } from '../../domain/ports/Rol.repository';
import { Rol } from '../../domain/entities/Rol.entity';

@Injectable()
export class ObtenerTodosRolUseCase {
  constructor(
    @Inject('RolRepository')
    private readonly repo: RolRepository,
  ) {}

  async execute(): Promise<Rol[]> {
    return this.repo.obtenerTodos();
  }
}
