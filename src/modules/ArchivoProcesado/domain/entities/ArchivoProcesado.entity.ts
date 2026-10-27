import { BadRequestException } from '@nestjs/common';

export class ArchivoProcesado {
  constructor(
    public readonly id_archivoprocesado: string,
    public job_ejecution_id_FK: string,
    public nombre_archivo: string,
    public ruta: string,
    public tipo: string,
    public tipo_reporte: number,
    public hash_archivo: string,
    public tamanio: string,
    public fecha_procesamiento: Date,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.job_ejecution_id_FK) throw new BadRequestException('El job de ejecucion es obligatorio');
    if (!this.nombre_archivo) throw new BadRequestException('El nombre del archivo es obligatorio');
    if (!this.ruta) throw new BadRequestException('La ruta es obligatoria');
    if (!this.tipo) throw new BadRequestException('El tipo es obligatorio');
    if (this.tipo_reporte === undefined || this.tipo_reporte === null) throw new BadRequestException('El tipo de reporte es obligatorio');
    if (!this.hash_archivo) throw new BadRequestException('El hash del archivo es obligatorio');
    if (!this.tamanio) throw new BadRequestException('El tamanio es obligatorio');
    if (!this.fecha_procesamiento) throw new BadRequestException('La fecha de procesamiento es obligatoria');
  }
}
