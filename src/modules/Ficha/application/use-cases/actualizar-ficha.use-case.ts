import { Inject, Injectable } from '@nestjs/common';
import type { FichaRepository } from '../../domain/ports/Ficha.repository';
import { Ficha, OrigenFicha } from '../../domain/entities/Ficha.entity';

@Injectable()
export class actualizarFichaUseCase {
  constructor(
    @Inject('FichaRepository')
    private readonly repo: FichaRepository,
  ) {}

  async execute(
    id: string,
    data: {
      numero?: string;
      origen?: OrigenFicha;
      fecha_inicio?: Date;
      fecha_fin?: Date;
      estado?: string;
      modalidad?: string;
      codigo_programa_especial?: string;
      programa_especial?: string;
      duracion_productiva_meses?: number;
    },
  ): Promise<Ficha> {
    const mapped: Partial<Ficha> = {
      ...(data.numero && { numero: data.numero }),
      ...(data.origen && { origen: data.origen }),
      ...(data.fecha_inicio && { fecha_inicio: data.fecha_inicio }),
      ...(data.fecha_fin && { fecha_fin: data.fecha_fin }),
      ...(data.estado && { estado: data.estado }),
      ...(data.modalidad && { modalidad: data.modalidad }),
      ...(data.codigo_programa_especial && { codigo_programa_especial: data.codigo_programa_especial }),
      ...(data.programa_especial && { programa_especial: data.programa_especial }),
      ...(data.duracion_productiva_meses !== undefined && { duracion_productiva_meses: data.duracion_productiva_meses }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
