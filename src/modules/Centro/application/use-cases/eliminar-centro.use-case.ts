import { Inject, Injectable } from "@nestjs/common";
import type { CentroRepository } from "../../domain/ports/Centro.repository";


@Injectable()
export class eliminarCentroUseCase{
    constructor(
        @Inject('CentroRepository')
        private readonly repo:CentroRepository
    ){}

    async execute(id:string):Promise<void>{
        this.repo.eliminar(id)
    }
}