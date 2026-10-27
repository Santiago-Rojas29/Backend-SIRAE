import { BadRequestException } from '@nestjs/common';

export class TipoNovedad {
  constructor(
    public readonly id_tiponovedad: string,
    public codigo: string,
    public nombre: string,
    public descripcion: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.codigo) throw new BadRequestException('El codigo es obligatorio');
    if (!this.nombre) throw new BadRequestException('El nombre es obligatorio');
    if (!this.descripcion) throw new BadRequestException('La descripcion es obligatoria');
  }
}
