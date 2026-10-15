import { Inject, Injectable } from '@nestjs/common';
import type { ContratoAprendizajeRepository } from '../../domain/ports/ContratoAprendizaje.repository';
import { ContratoAprendizaje } from '../../domain/entities/ContratoAprendizaje.entity';

@Injectable()
export class actualizarContratoAprendizajeUseCase {
  constructor(
    @Inject('ContratoAprendizajeRepository')
    private readonly repo: ContratoAprendizajeRepository,
  ) {}

  async execute(
    id: string,
    data: {
      numero_contrato?: string;
      fecha_inicio?: Date;
      fecha_fin?: Date;
      estado?: string;
      nit_eps?: string;
      nombre_eps?: string;
      nit_arl?: string;
      nombre_arl?: string;
      contrato_cedido_a?: string;
      fecha_registro_sgva?: Date;
    },
  ): Promise<ContratoAprendizaje> {
    const mapped: Partial<ContratoAprendizaje> = {
      ...(data.numero_contrato && { numero_contrato: data.numero_contrato }),
      ...(data.fecha_inicio && { fecha_inicio: data.fecha_inicio }),
      ...(data.fecha_fin && { fecha_fin: data.fecha_fin }),
      ...(data.estado && { estado: data.estado }),
      ...(data.nit_eps && { nit_eps: data.nit_eps }),
      ...(data.nombre_eps && { nombre_eps: data.nombre_eps }),
      ...(data.nit_arl && { nit_arl: data.nit_arl }),
      ...(data.nombre_arl && { nombre_arl: data.nombre_arl }),
      ...(data.contrato_cedido_a && { contrato_cedido_a: data.contrato_cedido_a }),
      ...(data.fecha_registro_sgva && { fecha_registro_sgva: data.fecha_registro_sgva }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
