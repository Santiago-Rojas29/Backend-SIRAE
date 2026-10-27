import { Inject, Injectable } from '@nestjs/common';
import type { EtapaProductivaRepository } from '../../domain/ports/EtapaProductiva.repository';
import { EtapaProductiva } from '../../domain/entities/EtapaProductiva.entity';

@Injectable()
export class CrearEtapaProductivaUseCase {
  constructor(
    @Inject('EtapaProductivaRepository')
    private readonly repo: EtapaProductivaRepository,
  ) {}

  async execute(data: {
    seleccion_ep_id_FK: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    estado: string;
    ente_cooformador: string;
    coordinador_academico: string;
    instructor_seguimiento: string;
    fecha_remision_subdirector?: Date;
    fecha_registro_sofia?: Date;
    observaciones?: string;
  }): Promise<EtapaProductiva> {
    const entity = new EtapaProductiva(
      '',
      data.seleccion_ep_id_FK,
      data.fecha_inicio,
      data.fecha_fin,
      data.estado,
      data.ente_cooformador,
      data.coordinador_academico,
      data.instructor_seguimiento,
      data.fecha_remision_subdirector,
      data.fecha_registro_sofia,
      data.observaciones,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
