import { Inject, Injectable } from "@nestjs/common";
import type{ RegionalRepository } from "../../domain/ports/Regional.repository";
import { Regional } from "../../domain/entities/Regional.entity";


@Injectable()
export class obtenerRegionalTodoslUseCase{
    constructor(
        @Inject('RegionalRepository')
        private readonly repo: RegionalRepository
    ){}

    async execute(): Promise<Regional[]>{
        return this.repo.obtenerTodos();
    }

}