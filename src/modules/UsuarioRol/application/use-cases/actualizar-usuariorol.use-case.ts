import { Inject, Injectable } from '@nestjs/common';
import type { UsuarioRolRepository } from '../../domain/ports/UsuarioRol.repository';
import { UsuarioRol } from '../../domain/entities/UsuarioRol.entity';

@Injectable()
export class actualizarUsuarioRolUseCase {
  constructor(
    @Inject('UsuarioRolRepository')
    private readonly repo: UsuarioRolRepository,
  ) {}

  async execute(
    id: string,
    data: { usuario_id_FK?: string; rol_id_FK?: string },
  ): Promise<UsuarioRol> {
    const mapped: Partial<UsuarioRol> = {
      ...(data.usuario_id_FK && { usuario_id_FK: data.usuario_id_FK }),
      ...(data.rol_id_FK && { rol_id_FK: data.rol_id_FK }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
