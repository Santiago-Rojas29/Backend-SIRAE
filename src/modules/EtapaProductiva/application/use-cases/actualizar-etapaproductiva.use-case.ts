import { Inject, Injectable } from '@nestjs/common';
import type { EtapaProductivaRepository } from '../../domain/ports/EtapaProductiva.repository';
import { EtapaProductiva } from '../../domain/entities/EtapaProductiva.entity';

@Injectable()
export class actualizarEtapaProductivaUseCase {
  constructor(
    @Inject('EtapaProductivaRepository')
    private readonly repo: EtapaProductivaRepository,
  ) {}

  async execute(
    id: string,
    data: {
      fecha_inicio?: Date;
      fecha_fin?: Date;
      estado?: string;
      ente_cooformador?: string;
      coordinador_academico?: string;
      instructor_seguimiento?: string;
      fecha_remision_subdirector?: Date;
      fecha_registro_sofia?: Date;
      observaciones?: string;
    },
  ): Promise<EtapaProductiva> {
    const mapped: Partial<EtapaProductiva> = {
      ...(data.fecha_inicio && { fecha_inicio: data.fecha_inicio }),
      ...(data.fecha_fin && { fecha_fin: data.fecha_fin }),
      ...(data.estado && { estado: data.estado }),
      ...(data.ente_cooformador && { ente_cooformador: data.ente_cooformador }),
      ...(data.coordinador_academico && { coordinador_academico: data.coordinador_academico }),
      ...(data.instructor_seguimiento && { instructor_seguimiento: data.instructor_seguimiento }),
      ...(data.fecha_remision_subdirector && { fecha_remision_subdirector: data.fecha_remision_subdirector }),
      ...(data.fecha_registro_sofia && { fecha_registro_sofia: data.fecha_registro_sofia }),
      ...(data.observaciones && { observaciones: data.observaciones }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
