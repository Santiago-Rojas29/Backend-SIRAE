import { Inject, Injectable } from "@nestjs/common";
import type { EmpresaRepository } from "../../domain/ports/Empresa.repository";
import { Empresa } from "../../domain/entities/Empresa.entity";


@Injectable()
export class obtenerEmpresaPorIdUseCase{
    constructor(
        @Inject('EmpresaRepository')
        private readonly repo:EmpresaRepository

    ){}

    async execute(id:string):Promise<Empresa | null>{
        return this.repo.obtenerPorId(id)

    }
}