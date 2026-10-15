import { Inject, Injectable } from '@nestjs/common';
import type{ AlternativaepRepository } from '../../domain/ports/Alternativaep.repository';
import { Alternativaep } from '../../domain/entities/Alternativaep.entity';

@Injectable()
export class CrearAlternativaepUseCase {
  constructor(
    @Inject('AlternativaepRepository')
    private readonly repo: AlternativaepRepository,
  ) {}

  async execute(data: {categoria_id_FK:string,nombre: string; texto_sofia: string }): Promise<Alternativaep> {
    const entity = new Alternativaep('',data.categoria_id_FK,data.nombre, data.texto_sofia);
    return this.repo.crear(entity);
  }
}
