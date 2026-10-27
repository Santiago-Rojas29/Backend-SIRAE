import { BadRequestException } from '@nestjs/common';

export class Resolucion {
  constructor(
    public readonly id_resolucion: string,
    public numero: string,
    public anio: number,
    public fecha: Date,
    public tipo?: string,
    public observaciones?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.numero) throw new BadRequestException('El numero es obligatorio');
    if (!this.anio) throw new BadRequestException('El anio es obligatorio');
    if (!this.fecha) throw new BadRequestException('La fecha es obligatoria');
  }
}
