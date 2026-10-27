import { Inject, Injectable } from '@nestjs/common';
import type { MatriculaRepository } from '../../domain/ports/Matricula.repository';
import { Matricula } from '../../domain/entities/Matricula.entity';

@Injectable()
export class CrearMatriculaUseCase {
  constructor(
    @Inject('MatriculaRepository')
    private readonly repo: MatriculaRepository,
  ) {}

  async execute(data: {
    aprendiz_id_FK: string;
    ficha_id_FK: string;
    estado: string;
    fecha_inicio?: Date;
    estado_sgva?: string;
    cantidad_contratos_sgva?: number;
    fecha_actualizacion_sgva?: Date;
  }): Promise<Matricula> {
    const entity = new Matricula(
      '',
      data.aprendiz_id_FK,
      data.ficha_id_FK,
      data.estado,
      data.fecha_inicio,
      data.estado_sgva,
      data.cantidad_contratos_sgva,
      data.fecha_actualizacion_sgva,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
