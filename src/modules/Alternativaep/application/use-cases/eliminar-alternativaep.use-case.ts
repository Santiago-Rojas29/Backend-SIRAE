import { Inject, Injectable } from "@nestjs/common";
import type{ AlternativaepRepository } from "../../domain/ports/Alternativaep.repository";

@Injectable()
export class EliminarAlternativaepUseCase{
    constructor(
        @Inject('AlternativaepRepository')
        private readonly repo: AlternativaepRepository
    ){}
    async execute(id:string):Promise<void>{
        this.repo.eliminar(id)
    } 
}