import { BadRequestException } from '@nestjs/common';

export enum TipoPlataforma{
  'SOFIA_PLUS'='sofia_plus',
  'SGVA'='sgva',
  'SVP'='svp'
}



export class Tipocredencial {
  constructor(
    public readonly id_tipocredencial: string,
    public plataforma: TipoPlataforma,
    public nombre: string,
    public roles: string,
    public descripcion?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!Object.values(TipoPlataforma).includes(this.plataforma)) throw new BadRequestException('La plataforma no es valida');
    if (!this.nombre) throw new BadRequestException('El nombre es obligatorio');
    if (!this.roles) throw new BadRequestException('Los roles son obligatorios')
  }
}
