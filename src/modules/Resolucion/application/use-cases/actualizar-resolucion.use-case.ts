import { Inject, Injectable } from '@nestjs/common';
import type { ResolucionRepository } from '../../domain/ports/Resolucion.repository';
import { Resolucion } from '../../domain/entities/Resolucion.entity';

@Injectable()
export class actualizarResolucionUseCase {
  constructor(
    @Inject('ResolucionRepository')
    private readonly repo: ResolucionRepository,
  ) {}

  async execute(
    id: string,
    data: {
      numero?: string;
      anio?: number;
      fecha?: Date;
      tipo?: string;
      observaciones?: string;
    },
  ): Promise<Resolucion> {
    const mapped: Partial<Resolucion> = {
      ...(data.numero && { numero: data.numero }),
      ...(data.anio !== undefined && { anio: data.anio }),
      ...(data.fecha && { fecha: data.fecha }),
      ...(data.tipo && { tipo: data.tipo }),
      ...(data.observaciones && { observaciones: data.observaciones }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
