import { Inject, Injectable } from "@nestjs/common";
import type{ TipocredencialRepository } from "../../domain/ports/Tipocredencial.repository";
import { Tipocredencial } from "../../domain/entities/Tipocredencial.entity";


@Injectable()
export class ObtenerTodosTipocredencialUseCase{
    constructor(
        @Inject('TipocredencialRepository')
        private readonly repo:TipocredencialRepository
    ){}

    async execute():Promise<Tipocredencial[]>{
        return this.repo.obtenerTodos()
    }
}