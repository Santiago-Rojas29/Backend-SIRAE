import { Inject, Injectable } from '@nestjs/common';
import type { UsuarioRolRepository } from '../../domain/ports/UsuarioRol.repository';

@Injectable()
export class eliminarUsuarioRolUseCase {
  constructor(
    @Inject('UsuarioRolRepository')
    private readonly repo: UsuarioRolRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
