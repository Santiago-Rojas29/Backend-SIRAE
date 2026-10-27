import { BadRequestException } from '@nestjs/common';

export class JobEjecution {
  constructor(
    public readonly id_jobejecution: string,
    public usuario_id_FK: string,
    public credencial_id_FK: string,
    public tipo: string,
    public disparado_por: string,
    public estado: string,
    public fecha_incio: Date,
    public total_items: number,
    public items_procesados: number,
    public fecha_fin?: Date,
    public errores?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.usuario_id_FK) throw new BadRequestException('El usuario es obligatorio');
    if (!this.credencial_id_FK) throw new BadRequestException('La credencial es obligatoria');
    if (!this.tipo) throw new BadRequestException('El tipo es obligatorio');
    if (!this.disparado_por) throw new BadRequestException('El disparador es obligatorio');
    if (!this.estado) throw new BadRequestException('El estado es obligatorio');
    if (!this.fecha_incio) throw new BadRequestException('La fecha de inicio es obligatoria');
  }
}
