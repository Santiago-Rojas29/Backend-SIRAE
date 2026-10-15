import type{ RegionalRepository } from '../../domain/ports/Regional.repository';
import { Regional } from '../../domain/entities/Regional.entity';
import { Inject, Injectable } from '@nestjs/common';


@Injectable()
export class CrearRegionalUseCase {
  constructor(
    @Inject('RegionalRepository')
    private readonly repo: RegionalRepository) {}

  async execute(data: { nombre: string; codigo:string }): Promise<Regional> {
    const entity = new Regional('',  data.nombre, data.codigo,);
    return this.repo.crear(entity);
  }
}
