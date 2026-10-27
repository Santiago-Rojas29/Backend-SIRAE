import { Inject, Injectable } from '@nestjs/common';
import type { ArchivoProcesadoRepository } from '../../domain/ports/ArchivoProcesado.repository';
import { ArchivoProcesado } from '../../domain/entities/ArchivoProcesado.entity';

@Injectable()
export class CrearArchivoProcesadoUseCase {
  constructor(
    @Inject('ArchivoProcesadoRepository')
    private readonly repo: ArchivoProcesadoRepository,
  ) {}

  async execute(data: {
    job_ejecution_id_FK: string;
    nombre_archivo: string;
    ruta: string;
    tipo: string;
    tipo_reporte: number;
    hash_archivo: string;
    tamanio: string;
    fecha_procesamiento: Date;
  }): Promise<ArchivoProcesado> {
    const entity = new ArchivoProcesado(
      '',
      data.job_ejecution_id_FK,
      data.nombre_archivo,
      data.ruta,
      data.tipo,
      data.tipo_reporte,
      data.hash_archivo,
      data.tamanio,
      data.fecha_procesamiento,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
