import { BadRequestException } from '@nestjs/common';

export class SeleccionEp {
  constructor(
    public readonly id_seleccionep: string,
    public matricula_id_FK: string,
    public alternativa_id_FK: string,
    public alternativa_original_id_FK: string | null,
    public estado_proceso: string,
    public fecha_respuesta?: Date,
    public verificacion_ficha?: string,
    public resultado_verificacion_sgva?: string,
    public fecha_verificacion?: Date,
    public ruta_formato?: string,
    public fecha_revision?: Date,
    public fecha_migracion_sgva?: Date,
    public observaciones?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.matricula_id_FK) throw new BadRequestException('La matricula es obligatoria');
    if (!this.alternativa_id_FK) throw new BadRequestException('La alternativa es obligatoria');
    if (!this.estado_proceso) throw new BadRequestException('El estado del proceso es obligatorio');
  }
}
