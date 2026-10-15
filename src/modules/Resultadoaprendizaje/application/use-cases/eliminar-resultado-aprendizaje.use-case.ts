import { Inject, Injectable } from "@nestjs/common";
import type{ ResultadoaprendizajeRepository } from "../../domain/ports/Resultadoaprendizaje.repository";


@Injectable()
export class eliminarResultadoAprendizajeUseCase{
    constructor(
        @Inject('ResultadoaprendizajeRepository')
        private readonly repo:ResultadoaprendizajeRepository
    ){}

    async execute(id:string):Promise<void>{
        await this.repo.eliminar(id)
    }
}