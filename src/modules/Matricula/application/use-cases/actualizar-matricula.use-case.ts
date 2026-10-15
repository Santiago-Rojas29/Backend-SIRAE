import { Inject, Injectable } from '@nestjs/common';
import type { MatriculaRepository } from '../../domain/ports/Matricula.repository';
import { Matricula } from '../../domain/entities/Matricula.entity';

@Injectable()
export class actualizarMatriculaUseCase {
  constructor(
    @Inject('MatriculaRepository')
    private readonly repo: MatriculaRepository,
  ) {}

  async execute(
    id: string,
    data: {
      estado?: string;
      fecha_inicio?: Date;
      estado_sgva?: string;
      cantidad_contratos_sgva?: number;
      fecha_actualizacion_sgva?: Date;
    },
  ): Promise<Matricula> {
    const mapped: Partial<Matricula> = {
      ...(data.estado && { estado: data.estado }),
      ...(data.fecha_inicio && { fecha_inicio: data.fecha_inicio }),
      ...(data.estado_sgva !== undefined && { estado_sgva: data.estado_sgva }),
      ...(data.cantidad_contratos_sgva !== undefined && { cantidad_contratos_sgva: data.cantidad_contratos_sgva }),
      ...(data.fecha_actualizacion_sgva !== undefined && { fecha_actualizacion_sgva: data.fecha_actualizacion_sgva }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
