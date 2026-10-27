import { BadRequestException } from '@nestjs/common';

export class Regional {
  constructor(
    public readonly id_regional: string,
    public nombre: string,
    public codigo: string,
    public created_at?: Date,
    public updated_at?: Date
  ) {}

  validar():void{
    if(!this.nombre) throw new BadRequestException('El nombre es obligatorio');
    if(!this.codigo) throw new BadRequestException('El codigo es obligatorio')
  }
}
