import { Inject, Injectable } from "@nestjs/common";
import type{ CentroRepository } from "../../domain/ports/Centro.repository";
import { Centro } from "../../domain/entities/Centro.entity";


@Injectable()
export class actualizarCentroUseCase{
    constructor(
        @Inject('CentroRepository')
        private readonly repo:CentroRepository
    ){}

    async execute(id:string, data:{
        codigo:string,
        nombre:string,
        direccion:string,
        municipio:string,
        departamento:string,
        telefono:string,
        correo:string

    }):Promise<Centro>{
        const mapped: Partial<Centro>={
            ...(data.codigo &&{codigo:data.codigo}),
            ...(data.nombre &&{nombre:data.nombre}),
            ...(data.direccion &&{direccion:data.direccion}),
            ...(data.municipio &&{municipio:data.municipio}),
            ...(data.departamento &&{departamento:data.departamento}),
            ...(data.telefono &&{telefono:data.telefono}),
            ...(data.correo &&{correo:data.correo})
        }
        return this.repo.actualizar(id,mapped)
    }
}