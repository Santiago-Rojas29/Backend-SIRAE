import { BadRequestException } from '@nestjs/common';

export class Permiso {
  constructor(
    public readonly id_permiso: string,
    public modulo: string,
    public accion: string,
    public descripcion: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.modulo) throw new BadRequestException('El modulo es obligatorio');
    if (!this.accion) throw new BadRequestException('La accion es obligatoria');
  }
}
