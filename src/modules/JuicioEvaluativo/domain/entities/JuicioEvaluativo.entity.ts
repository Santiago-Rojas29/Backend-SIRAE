import { BadRequestException } from '@nestjs/common';

export class JuicioEvaluativo {
  constructor(
    public readonly id_juicioevaluativo: string,
    public matricula_id_FK: string,
    public resultado_aprendizaje_id_FK: string,
    public calificacion: string,
    public fecha_hora: Date,
    public funcionario: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.matricula_id_FK) throw new BadRequestException('La matricula es obligatoria');
    if (!this.resultado_aprendizaje_id_FK) throw new BadRequestException('El resultado de aprendizaje es obligatorio');
    if (!this.calificacion) throw new BadRequestException('La calificacion es obligatoria');
    if (!this.fecha_hora) throw new BadRequestException('La fecha y hora es obligatoria');
    if (!this.funcionario) throw new BadRequestException('El funcionario es obligatorio');
  }
}
