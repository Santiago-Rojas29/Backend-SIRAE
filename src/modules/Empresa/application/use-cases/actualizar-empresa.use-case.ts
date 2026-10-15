import { Inject, Injectable } from "@nestjs/common";
import type{ EmpresaRepository } from "../../domain/ports/Empresa.repository";
import { Empresa } from "../../domain/entities/Empresa.entity";


@Injectable()
export class actualizarEmpresaUseCase{
    constructor(
        @Inject('EmpresaRepository')
        private readonly repo:EmpresaRepository
    ){}

    async execute(id:string, data:{
        nit?:string,
        razon_social?:string,
        direccion?:string,
        telefono?:string,
        correo?:string,
        ciudad?:string,
        departamento?:string
    }):Promise<Empresa>{
        const mapped:Partial<Empresa>={
            ...(data.nit &&{nit:data.nit}),
            ...(data.razon_social &&{razon_social:data.razon_social}),
            ...(data.direccion &&{direccion:data.direccion}),
            ...(data.telefono &&{telefono:data.telefono}),
            ...(data.correo &&{correo:data.correo}),
            ...(data.ciudad &&{ciudad:data.ciudad}),
            ...(data.departamento &&{departamento:data.departamento})


        }
    return this.repo.actualizar(id,mapped)
    }
}