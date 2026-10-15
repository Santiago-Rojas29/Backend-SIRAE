import { Inject, Injectable } from '@nestjs/common';
import type { UsuarioRolRepository } from '../../domain/ports/UsuarioRol.repository';
import { UsuarioRol } from '../../domain/entities/UsuarioRol.entity';

@Injectable()
export class ObtenerTodosUsuarioRolUseCase {
  constructor(
    @Inject('UsuarioRolRepository')
    private readonly repo: UsuarioRolRepository,
  ) {}

  async execute(): Promise<UsuarioRol[]> {
    return this.repo.obtenerTodos();
  }
}
