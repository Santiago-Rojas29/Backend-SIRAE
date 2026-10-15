import { Inject, Injectable } from "@nestjs/common";
import type{ RegionalRepository } from "../../domain/ports/Regional.repository";


@Injectable()
export class elimiarRegionalUseCase{
    constructor(
        @Inject('RegionalRepository')
        private readonly repo:RegionalRepository,
    ){}
    async execute(id:string):Promise<void>{
        return this.repo.eliminar(id);
    }
}