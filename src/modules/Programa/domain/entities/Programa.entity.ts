import { BadRequestException } from '@nestjs/common';

export class Programa {
  constructor(
    public readonly id_programa: string,
    public codigo: string,
    public version: string,
    public nombre: string,
    public nivel_formacion: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.codigo) throw new BadRequestException('El codigo es obligatorio');
    if (!this.version) throw new BadRequestException('La version es obligatoria');
    if (!this.nombre) throw new BadRequestException('El nombre es obligatorio');
    if (!this.nivel_formacion) throw new BadRequestException('El nivel de formacion es obligatorio');
  }
}
