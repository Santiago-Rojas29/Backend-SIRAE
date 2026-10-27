import { Inject, Injectable } from '@nestjs/common';
import type { UsuarioRolRepository } from '../../domain/ports/UsuarioRol.repository';
import { UsuarioRol } from '../../domain/entities/UsuarioRol.entity';

@Injectable()
export class CrearUsuarioRolUseCase {
  constructor(
    @Inject('UsuarioRolRepository')
    private readonly repo: UsuarioRolRepository,
  ) {}

  async execute(data: { usuario_id_FK: string; rol_id_FK: string }): Promise<UsuarioRol> {
    const entity = new UsuarioRol('', data.usuario_id_FK, data.rol_id_FK);
    entity.validar();
    return this.repo.crear(entity);
  }
}
