import { Inject, Injectable } from '@nestjs/common';
import type{ UsuarioRepository } from '../../domain/ports/Usuario.repository';
import { EstadoUsuario, TipoDocumento, TipoUsuario, Usuario } from '../../domain/entities/Usuario.entity';
import{ HASHER, type HasherPort } from '../../domain/ports/hasher.port';

@Injectable()
export class CrearUsuarioUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repo: UsuarioRepository,

    @Inject(HASHER)
    private readonly hasher:HasherPort
  ) {}

  async execute(data: {centro_id_Fk:string; nombre: string; correo: string; password:string; tipo_usuario:TipoUsuario; estado_usuario:EstadoUsuario,numero_documento:string,tipo_documento:TipoDocumento }): Promise<Usuario> {
    const passwordhasheada=await this.hasher.hashear(data.password)
    const entity = new Usuario('',data.centro_id_Fk,data.nombre, data.correo,passwordhasheada,data.tipo_usuario,data.estado_usuario,data.numero_documento,data.tipo_documento);
    entity.validar();
    return this.repo.crear(entity);
  }
}
