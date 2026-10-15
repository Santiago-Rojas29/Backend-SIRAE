import { Inject, Injectable } from "@nestjs/common";
import type{ AlternativaepRepository } from "../../domain/ports/Alternativaep.repository";
import { Alternativaep } from "../../domain/entities/Alternativaep.entity";

@Injectable()
export class ActualizarAlternativaepUseCase{
    constructor(
        @Inject('AlternativaepRepository')
        private readonly repo: AlternativaepRepository
    ){}

    async execute(id:string,data:{
        categoria_id_FK?:string,
        nombre?:string,
        texto_sofia?:string
    }):Promise<Alternativaep>{
        const mapped: Partial<Alternativaep>={
            ...(data.categoria_id_FK &&{categoria_ep_id_FK:data.categoria_id_FK}),
            ...(data.nombre &&{nombre:data.nombre}),
            ...(data.texto_sofia &&{texto_sofia:data.texto_sofia})


        }
        return this.repo.actualizar(id,mapped)
    }
}