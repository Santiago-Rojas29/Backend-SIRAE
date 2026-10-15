import { Inject, Injectable } from '@nestjs/common';
import type { CompetenciaRepository } from '../../domain/ports/Competencia.repository';
import { Competencia } from '../../domain/entities/Competencia.entity';

@Injectable()
export class CrearCompetenciaUseCase {
  constructor(
    @Inject('CompetenciaRepository')
    private readonly repo: CompetenciaRepository,
  ) {}

  async execute(data: { programa_id_FK: string; codigo: string; nombre: string; es_etapa_productiva: boolean }): Promise<Competencia> {
    const entity = new Competencia('', data.programa_id_FK, data.codigo, data.nombre, data.es_etapa_productiva);
    return this.repo.crear(entity);
  }
}
