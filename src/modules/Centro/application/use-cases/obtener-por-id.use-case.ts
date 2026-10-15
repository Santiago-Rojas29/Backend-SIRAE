import { Inject, Injectable } from "@nestjs/common";
import type{ CentroRepository } from "../../domain/ports/Centro.repository";
import { Centro } from "../../domain/entities/Centro.entity";

@Injectable()
export class obtenerPorIdCentroUseCase{
    constructor(
        @Inject('CentroRepository')
        private readonly repo:CentroRepository
    ){}

    async execute(id:string):Promise<Centro | null>{
        return this.repo.obtenerPorId(id)
    }
}