import { Inject, Injectable } from "@nestjs/common";
import type{ EmpresaRepository } from "../../domain/ports/Empresa.repository";


@Injectable()
export class eliminarEmpresaUseCase{
    constructor(
        @Inject('EmpresaRepository')
        private readonly repo: EmpresaRepository
    ){}

    async execute(id:string):Promise<void>{
        this.repo.eliminar(id)
    }

}