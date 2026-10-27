import { Inject, Injectable } from "@nestjs/common";
import type{ CredencialesRepository } from "../../domain/ports/Credenciales.repository";
import { Credenciales } from "../../domain/entities/Credenciales.entity";


@Injectable()
export class obtenerCredencialesPorIdUseCase{
    constructor(
        @Inject('CredencialesRepository')
        private readonly repo:CredencialesRepository
    ){}

    async execute(id:string): Promise<Credenciales | null>{
        return this.repo.obtenerPorId(id)
    }
}