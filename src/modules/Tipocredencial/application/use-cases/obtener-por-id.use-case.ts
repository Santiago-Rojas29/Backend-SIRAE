import { Inject, Injectable } from "@nestjs/common";
import type{ TipocredencialRepository } from "../../domain/ports/Tipocredencial.repository";
import { Tipocredencial } from "../../domain/entities/Tipocredencial.entity";


@Injectable()
export class ObtenerTipocredencialPorIdUseCase{
    constructor(
        @Inject('TipocredencialRepository')
        private readonly repo: TipocredencialRepository
    ){}

    async execute(id:string):Promise<Tipocredencial | null>{
        return this.repo.obtenerPorId(id)
    }
}