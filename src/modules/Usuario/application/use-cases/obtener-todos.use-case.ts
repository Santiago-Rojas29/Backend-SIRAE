import { Inject, Injectable } from "@nestjs/common";
import type{ UsuarioRepository } from "../../domain/ports/Usuario.repository";
import { Usuario } from "../../domain/entities/Usuario.entity";


@Injectable()
export class obtenerTodosUsuarioUseCase{
    constructor(
        @Inject('UsuarioRepository')
        private readonly repo:UsuarioRepository

    ){}

    async execute():Promise<Usuario[]>{
        return this.repo.obtenerTodos()
    }
}