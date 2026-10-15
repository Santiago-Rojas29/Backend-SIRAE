import { Inject, Injectable } from "@nestjs/common";
import type{ UsuarioRepository } from "../../domain/ports/Usuario.repository";

@Injectable()
export class eliminarUsuarioUseCase{
    constructor(
        @Inject('UsuarioRepository')
        private readonly repo: UsuarioRepository
    ){}
    async execute(id:string):Promise<void>{
        this.repo.eliminar(id)
    }

}