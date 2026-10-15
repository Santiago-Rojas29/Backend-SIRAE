import { Inject, Injectable } from "@nestjs/common";
import type{ EmpresaRepository } from "../../domain/ports/Empresa.repository";
import { Empresa } from "../../domain/entities/Empresa.entity";


@Injectable()
export class obtenerTodosEmpresasUseCase{
    constructor(
        @Inject('EmpresaRepository')
        private readonly repo:EmpresaRepository
    ){}

    async execute():Promise<Empresa[]>{
        return this.repo.obtenerTodos()
    }
}