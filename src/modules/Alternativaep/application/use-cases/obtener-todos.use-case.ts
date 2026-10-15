import { Inject, Injectable } from "@nestjs/common";
import type{ AlternativaepRepository } from "../../domain/ports/Alternativaep.repository";
import { Alternativaep } from "../../domain/entities/Alternativaep.entity";

@Injectable()
export class ObtenerTodosAlternativaepUseCase{
    constructor(
        @Inject('AlternativaepRepository')
        private readonly repo: AlternativaepRepository
    ){}
    async execute():Promise<Alternativaep[]>{
        return this.repo.obtenerTodos()
    }
}    