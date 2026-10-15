import { Inject, Injectable } from '@nestjs/common';
import type { JuicioEvaluativoRepository } from '../../domain/ports/JuicioEvaluativo.repository';
import { JuicioEvaluativo } from '../../domain/entities/JuicioEvaluativo.entity';

@Injectable()
export class actualizarJuicioEvaluativoUseCase {
  constructor(
    @Inject('JuicioEvaluativoRepository')
    private readonly repo: JuicioEvaluativoRepository,
  ) {}

  async execute(
    id: string,
    data: {
      calificacion?: string;
      fecha_hora?: Date;
      funcionario?: string;
    },
  ): Promise<JuicioEvaluativo> {
    const mapped: Partial<JuicioEvaluativo> = {
      ...(data.calificacion && { calificacion: data.calificacion }),
      ...(data.fecha_hora && { fecha_hora: data.fecha_hora }),
      ...(data.funcionario && { funcionario: data.funcionario }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
