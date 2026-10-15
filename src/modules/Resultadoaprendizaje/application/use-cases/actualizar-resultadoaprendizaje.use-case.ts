import { Injectable,Inject } from "@nestjs/common";
import type{ ResultadoaprendizajeRepository } from "../../domain/ports/Resultadoaprendizaje.repository";
import { Resultadoaprendizaje } from "../../domain/entities/Resultadoaprendizaje.entity";

@Injectable()
export class actualizarResultadoAprendizajeUseCase{
    constructor(
        @Inject('ResultadoaprendizajeRepository')
        private readonly repo:ResultadoaprendizajeRepository
    ){}

    async execute(id:string, data:{
        codigo?: string,
        nombre?:string
    }):Promise<Resultadoaprendizaje>{
        const mapped:Partial<Resultadoaprendizaje>={
            ...(data.codigo &&{codigo:data.codigo}),
            ...(data.nombre &&{nombre:data.nombre}),

        }
        return this.repo.actualizar(id,mapped)
    }
}