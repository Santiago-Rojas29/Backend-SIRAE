import { Inject, Injectable } from '@nestjs/common';
import type{ ResultadoaprendizajeRepository } from '../../domain/ports/Resultadoaprendizaje.repository';
import { Resultadoaprendizaje } from '../../domain/entities/Resultadoaprendizaje.entity';

@Injectable()
export class CrearResultadoaprendizajeUseCase {
  constructor(
    @Inject('ResultadoaprendizajeRepository')
    private readonly repo: ResultadoaprendizajeRepository,
  ) {}

  async execute(data: {competencia_id_FK:string,nombre: string; codigo: string }): Promise<Resultadoaprendizaje> {
    const entity = new Resultadoaprendizaje('',data.competencia_id_FK,data.nombre, data.codigo);
    return this.repo.crear(entity);
  }
}
