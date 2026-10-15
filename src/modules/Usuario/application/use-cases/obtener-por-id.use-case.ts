import { Inject, Injectable } from "@nestjs/common";
import  type { UsuarioRepository } from "../../domain/ports/Usuario.repository";
import { Usuario } from "../../domain/entities/Usuario.entity";


@Injectable()
export class obtenerUsuarioPorIdUseCase{
    constructor(
        @Inject('UsuarioRepository')
        private readonly repo: UsuarioRepository
    ){}

    async execute(id:string):Promise<Usuario|null>{
        return this.repo.obtenerPorId(id)
    }
}