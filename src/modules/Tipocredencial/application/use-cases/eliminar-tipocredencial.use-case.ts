import { Inject, Injectable } from "@nestjs/common";
import type{ TipocredencialRepository } from "../../domain/ports/Tipocredencial.repository";


@Injectable()
export class EliminarTipocredencialUseCase{
    constructor(
        @Inject('TipocredencialRepository')
        private readonly repo:TipocredencialRepository
    ){}


    async execute(id:string):Promise<void>{
        await this.repo.eliminar(id)
    }

}
