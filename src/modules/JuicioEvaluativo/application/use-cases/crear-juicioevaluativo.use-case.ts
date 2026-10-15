import { Inject, Injectable } from '@nestjs/common';
import type { JuicioEvaluativoRepository } from '../../domain/ports/JuicioEvaluativo.repository';
import { JuicioEvaluativo } from '../../domain/entities/JuicioEvaluativo.entity';

@Injectable()
export class CrearJuicioEvaluativoUseCase {
  constructor(
    @Inject('JuicioEvaluativoRepository')
    private readonly repo: JuicioEvaluativoRepository,
  ) {}

  async execute(data: {
    matricula_id_FK: string;
    resultado_aprendizaje_id_FK: string;
    calificacion: string;
    fecha_hora: Date;
    funcionario: string;
  }): Promise<JuicioEvaluativo> {
    const entity = new JuicioEvaluativo(
      '',
      data.matricula_id_FK,
      data.resultado_aprendizaje_id_FK,
      data.calificacion,
      data.fecha_hora,
      data.funcionario,
    );
    return this.repo.crear(entity);
  }
}
