import { Inject, Injectable } from '@nestjs/common';
import type { FichaRepository } from '../../domain/ports/Ficha.repository';
import { Ficha, OrigenFicha } from '../../domain/entities/Ficha.entity';

@Injectable()
export class CrearFichaUseCase {
  constructor(
    @Inject('FichaRepository')
    private readonly repo: FichaRepository,
  ) {}

  async execute(data: {
    centro_id_FK: string;
    programa_id_FK: string;
    numero: string;
    origen?: OrigenFicha;
    fecha_inicio?: Date;
    fecha_fin?: Date;
    estado?: string;
    modalidad?: string;
    codigo_programa_especial?: string;
    programa_especial?: string;
    duracion_productiva_meses?: number;
  }): Promise<Ficha> {
    const entity = new Ficha(
      '',
      data.centro_id_FK,
      data.programa_id_FK,
      data.numero,
      data.origen ?? OrigenFicha.DF49,
      data.fecha_inicio,
      data.fecha_fin,
      data.estado,
      data.modalidad,
      data.codigo_programa_especial,
      data.programa_especial,
      data.duracion_productiva_meses,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
