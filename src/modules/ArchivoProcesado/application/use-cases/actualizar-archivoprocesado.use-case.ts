import { Inject, Injectable } from '@nestjs/common';
import type { ArchivoProcesadoRepository } from '../../domain/ports/ArchivoProcesado.repository';
import { ArchivoProcesado } from '../../domain/entities/ArchivoProcesado.entity';

@Injectable()
export class actualizarArchivoProcesadoUseCase {
  constructor(
    @Inject('ArchivoProcesadoRepository')
    private readonly repo: ArchivoProcesadoRepository,
  ) {}

  async execute(
    id: string,
    data: {
      nombre_archivo?: string;
      ruta?: string;
      tipo?: string;
      tipo_reporte?: number;
      hash_archivo?: string;
      tamanio?: string;
      fecha_procesamiento?: Date;
    },
  ): Promise<ArchivoProcesado> {
    const mapped: Partial<ArchivoProcesado> = {
      ...(data.nombre_archivo && { nombre_archivo: data.nombre_archivo }),
      ...(data.ruta && { ruta: data.ruta }),
      ...(data.tipo && { tipo: data.tipo }),
      ...(data.tipo_reporte !== undefined && { tipo_reporte: data.tipo_reporte }),
      ...(data.hash_archivo && { hash_archivo: data.hash_archivo }),
      ...(data.tamanio && { tamanio: data.tamanio }),
      ...(data.fecha_procesamiento && { fecha_procesamiento: data.fecha_procesamiento }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
