import { Inject, Injectable } from "@nestjs/common";
import type{ UsuarioRepository } from "../../domain/ports/Usuario.repository";
import { EstadoUsuario, TipoDocumento, TipoUsuario, Usuario } from "../../domain/entities/Usuario.entity";


@Injectable()
export class actualizarUsuarioUseCase{
    constructor(
        @Inject('UsuarioRepository')
        private readonly repo:UsuarioRepository
    ){}

    async execute(id:string,data:{
        nombre:string,
        correo:string,
        password:string,
        tipo_usuario:TipoUsuario,
        estado_usuario:EstadoUsuario,
        numero_documento:string,
        tipo_documento:TipoDocumento,
    }):Promise<Usuario>{

        const mapped: Partial<Usuario>={
            ...(data.nombre &&{nombre:data.nombre}),
            ...(data.correo && {correo:data.correo}),
            ...(data.password && {password:data.password}),
            ...(data.tipo_usuario && {tipo_usuario:data.tipo_usuario}),
            ...(data.estado_usuario && {estado_usuario:data.estado_usuario}),
            ...(data.numero_documento &&{numero_documento:data.numero_documento}),
            ...(data.tipo_documento &&{tipo_documento:data.tipo_documento})
        }
        return this.repo.actualizar(id,mapped)
    }
}