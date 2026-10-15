import { Inject, Injectable } from "@nestjs/common";
import type{ CentroRepository } from "../../domain/ports/Centro.repository";
import { Centro } from "../../domain/entities/Centro.entity";

@Injectable()
export class ObtenerTodosCentroUseCase{
    constructor(
        @Inject('CentroRepository')
        private readonly repo:CentroRepository
    ){}

    async execute():Promise<Centro[]>{
        return this.repo.obtenerTodos();
    }
}