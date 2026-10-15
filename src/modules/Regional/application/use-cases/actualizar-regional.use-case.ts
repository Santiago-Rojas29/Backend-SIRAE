import { Inject, Injectable } from "@nestjs/common";
import type{ RegionalRepository } from "../../domain/ports/Regional.repository";
import { Regional } from "../../domain/entities/Regional.entity";

@Injectable()
export class actualizarRegionalUseCase{
    constructor(
        @Inject('RegionalRepository')
        private readonly repo: RegionalRepository

    ){}

    async execute(id:string, data:{
        nombre?:string,
        codigo?:string
    }):Promise<Regional>{
        const mapped: Partial<Regional>={
            ...(data.nombre && {nombre:data.nombre}),
            ...(data.codigo && {codigo:data.codigo}),
            
        };
        return this.repo.actualizar(id, mapped)
    }
}