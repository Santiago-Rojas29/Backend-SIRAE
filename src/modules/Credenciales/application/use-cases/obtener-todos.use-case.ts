import { Inject, Injectable } from "@nestjs/common";
import type{ CredencialesRepository } from "../../domain/ports/Credenciales.repository";
import { Credenciales } from "../../domain/entities/Credenciales.entity";


@Injectable()
export class obtenerTodosCredencialesUseCase{
    
    constructor(
        @Inject('CredencialesRepository')
        private readonly repo:CredencialesRepository
    ){}
    
    async execute():Promise<Credenciales[]>{
        return this.repo.obtenerTodos()
    }
}