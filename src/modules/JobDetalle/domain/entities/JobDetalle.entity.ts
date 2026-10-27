import { BadRequestException } from '@nestjs/common';

export class JobDetalle {
  constructor(
    public readonly id_jobdetalle: string,
    public job_ejecution_id_FK: string,
    public matricula_id_FK: string | null,
    public ficha_id_FK: string | null,
    public referencia: string,
    public resultado: string,
    public mensaje: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.job_ejecution_id_FK) throw new BadRequestException('El job de ejecucion es obligatorio');
    if (!this.referencia) throw new BadRequestException('La referencia es obligatoria');
    if (!this.resultado) throw new BadRequestException('El resultado es obligatorio');
    if (!this.mensaje) throw new BadRequestException('El mensaje es obligatorio');
  }
}
