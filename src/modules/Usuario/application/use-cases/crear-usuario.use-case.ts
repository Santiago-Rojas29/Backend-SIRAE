import { Inject, Injectable } from '@nestjs/common';
import type{ UsuarioRepository } from '../../domain/ports/Usuario.repository';
import { EstadoUsuario, TipoDocumento, TipoUsuario, Usuario } from '../../domain/entities/Usuario.entity';

@Injectable()
export class CrearUsuarioUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repo: UsuarioRepository,
  ) {}

  async execute(data: {centro_id_Fk:string; nombre: string; correo: string; password:string; tipo_usuario:TipoUsuario; estado_usuario:EstadoUsuario,numero_documento:string,tipo_documento:TipoDocumento }): Promise<Usuario> {
    const entity = new Usuario('',data.centro_id_Fk,data.nombre, data.correo,data.password,data.tipo_usuario,data.estado_usuario,data.numero_documento,data.tipo_documento);
    return this.repo.crear(entity);
  }
}
