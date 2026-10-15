import { Inject, Injectable } from '@nestjs/common';
import type { CompetenciaRepository } from '../../domain/ports/Competencia.repository';
import { Competencia } from '../../domain/entities/Competencia.entity';

@Injectable()
export class actualizarCompetenciaUseCase {
  constructor(
    @Inject('CompetenciaRepository')
    private readonly repo: CompetenciaRepository,
  ) {}

  async execute(
    id: string,
    data: {
      codigo?: string;
      nombre?: string;
      es_etapa_productiva?: boolean;
    },
  ): Promise<Competencia> {
    const mapped: Partial<Competencia> = {
      ...(data.codigo && { codigo: data.codigo }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.es_etapa_productiva !== undefined && { es_etapa_productiva: data.es_etapa_productiva }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
