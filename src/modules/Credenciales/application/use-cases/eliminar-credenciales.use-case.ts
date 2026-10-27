import { Inject, Injectable } from "@nestjs/common";
import type{ CredencialesRepository } from "../../domain/ports/Credenciales.repository";
@Injectable()
export class eliminarCredencialesUseCase{

    constructor(
        @Inject('CredencialesRepository')
        private readonly repo:CredencialesRepository
    ){}

    async execute(id:string):Promise<void>{
        await this.repo.eliminar(id)
    }

}
