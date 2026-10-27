import { Inject, Injectable } from '@nestjs/common';
import type { ContratoAprendizajeRepository } from '../../domain/ports/ContratoAprendizaje.repository';
import { ContratoAprendizaje } from '../../domain/entities/ContratoAprendizaje.entity';

@Injectable()
export class CrearContratoAprendizajeUseCase {
  constructor(
    @Inject('ContratoAprendizajeRepository')
    private readonly repo: ContratoAprendizajeRepository,
  ) {}

  async execute(data: {
    etapa_productiva_id_FK: string;
    empresa_id_FK: string;
    numero_contrato: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    estado: string;
    nit_eps: string;
    nombre_eps: string;
    nit_arl: string;
    nombre_arl: string;
    contrato_cedido_a?: string;
    fecha_registro_sgva?: Date;
  }): Promise<ContratoAprendizaje> {
    const entity = new ContratoAprendizaje(
      '',
      data.etapa_productiva_id_FK,
      data.empresa_id_FK,
      data.numero_contrato,
      data.fecha_inicio,
      data.fecha_fin,
      data.estado,
      data.nit_eps,
      data.nombre_eps,
      data.nit_arl,
      data.nombre_arl,
      data.contrato_cedido_a,
      data.fecha_registro_sgva,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
