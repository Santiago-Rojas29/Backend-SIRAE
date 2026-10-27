import { BadRequestException } from '@nestjs/common';

export class Resultadoaprendizaje {
  constructor(
    public readonly id_resultadoaprendizaje: string,
    public competencia_id_FK: string,
    public codigo: string,
    public nombre: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.nombre) throw new BadRequestException('El nombre es obligatorio');
    if (!this.codigo) throw new BadRequestException('El codigo es obligatorio');
    if (!this.competencia_id_FK) throw new BadRequestException('La competencia es obligatoria')
  }
}
