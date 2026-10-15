import { Inject, Injectable } from "@nestjs/common";
import type{ AlternativaepRepository } from "../../domain/ports/Alternativaep.repository";
import { Alternativaep } from "../../domain/entities/Alternativaep.entity";


@Injectable()
export class ObtenerPorIdAlternativaepUseCase{
    constructor(
        @Inject('AlternativaepRepository')
        private readonly repo:AlternativaepRepository
    ){}

    async execute(id:string):Promise<Alternativaep | null>{
        return this.repo.obtenerPorId(id)
    }

}