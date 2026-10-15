import { Inject, Injectable } from "@nestjs/common";
import type{ RegionalRepository } from "../../domain/ports/Regional.repository"
import { Regional } from "../../domain/entities/Regional.entity";

@Injectable()
export class obtenerRegionalPorIdUseCase{
    constructor(
        @Inject('RegionalRepository')
        private readonly repo:RegionalRepository,
    ){}

    async execute(id:string):Promise<Regional|null>{
        return this.repo.obtenerPorId(id);
    }
}
