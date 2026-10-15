import { Inject, Injectable } from '@nestjs/common';
import type { ResolucionRepository } from '../../domain/ports/Resolucion.repository';
import { Resolucion } from '../../domain/entities/Resolucion.entity';

@Injectable()
export class CrearResolucionUseCase {
  constructor(
    @Inject('ResolucionRepository')
    private readonly repo: ResolucionRepository,
  ) {}

  async execute(data: {
    numero: string;
    anio: number;
    fecha: Date;
    tipo?: string;
    observaciones?: string;
  }): Promise<Resolucion> {
    const entity = new Resolucion('', data.numero, data.anio, data.fecha, data.tipo, data.observaciones);
    return this.repo.crear(entity);
  }
}
