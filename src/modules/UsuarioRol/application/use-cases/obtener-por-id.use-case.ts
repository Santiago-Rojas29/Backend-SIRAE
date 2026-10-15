import { Inject, Injectable } from '@nestjs/common';
import type { UsuarioRolRepository } from '../../domain/ports/UsuarioRol.repository';
import { UsuarioRol } from '../../domain/entities/UsuarioRol.entity';

@Injectable()
export class obtenerPorIdUsuarioRolUseCase {
  constructor(
    @Inject('UsuarioRolRepository')
    private readonly repo: UsuarioRolRepository,
  ) {}

  async execute(id: string): Promise<UsuarioRol | null> {
    return this.repo.obtenerPorId(id);
  }
}
