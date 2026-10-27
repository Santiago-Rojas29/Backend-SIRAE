import { BadRequestException } from '@nestjs/common';

export enum EstadoCredencial{
  'ACTIVA'='activa',
  'INACTICA'='inactiva',
  'INVALIDA'='invalida',
  'ROLES_INCOMPLETOS'='roles_incompletos'
}


export class Credenciales {
  constructor(
    public readonly id_credenciales: string,
    public centro_id_FK: string,
    public tipo_credenciales_id_FK:string,
    public datos_encryptados: string,
    public iv: string,
    public auth_tag: string,
    public estado:EstadoCredencial,
    public observacion_verificacion: string | undefined,
    public fecha_verificación: Date,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if(!this.centro_id_FK) throw new BadRequestException('El centro es obligatorio');
    if(!this.tipo_credenciales_id_FK) throw new BadRequestException('El tipo de credenciales es obligatorio');
    if(!this.datos_encryptados) throw new BadRequestException('Los datos encryptados son obligatorios')
    if(!this.iv) throw new BadRequestException('El iv es obligatorio')
    if(!Object.values(EstadoCredencial).includes(this.estado)) throw new BadRequestException('El estado de la credencial es obligatorio');
  }
}
