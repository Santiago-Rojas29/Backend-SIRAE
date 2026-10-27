import { Inject, Injectable } from "@nestjs/common";
import type{ TipocredencialRepository } from "../../domain/ports/Tipocredencial.repository";
import { Tipocredencial, TipoPlataforma } from "../../domain/entities/Tipocredencial.entity";


@Injectable()
export class ActualizarTipoCredencialUseCase{
    constructor(
        @Inject('TipocredencialRepository')
        private readonly repo:TipocredencialRepository
    ){}

    async execute(id:string, data:{
        plataforma?:TipoPlataforma,
        nombre?:string,
        descripcion?:string,
        roles?:string,
    }
    ):Promise<Tipocredencial>{
        const mapped:Partial<Tipocredencial>={
            ...(data.plataforma &&{plataforma:data.plataforma}),
            ...(data.nombre &&{nombre:data.nombre}),
            ...(data.descripcion &&{descripcion:data.descripcion}),
            ...(data.roles &&{roles:data.roles})
        }
    return this.repo.actualizar(id,mapped)
    }
}