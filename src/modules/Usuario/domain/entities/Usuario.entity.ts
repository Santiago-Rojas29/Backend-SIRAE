


import { BadRequestException } from '@nestjs/common';

export enum EstadoUsuario{
  Activo='activo',
  Inactivo='inactivo'
}

export enum TipoDocumento{
  CC='cc',
  TI='ti',
  CE='ce',
  PASAPORTE='pasaporte'
}

export enum TipoUsuario{
  SISTEMA='system',
  HUMANO='humano'
}



export class Usuario {
  constructor(
    public readonly id_usuario: string,
    public centro_id_FK: string,
    public nombre: string,
    public correo: string,
    public password: string,
    public tipo_usuario:TipoUsuario,
    public estado_usuario: EstadoUsuario,
    public numero_documento:string,
    public tipo_documento:TipoDocumento,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if(!this.nombre) throw new BadRequestException('El nombre es obligatorio');
    if(!Object.values(TipoDocumento).includes(this.tipo_documento)) throw new BadRequestException('Tipo de documento no es valido');
    if(!this.centro_id_FK) throw new BadRequestException('El centro es obligatorio');
    if(!this.correo) throw new BadRequestException('El correo es obligatorio');
    if(!this.password) throw new BadRequestException('La contraseña es obligatoria');
    if(!Object.values(TipoUsuario).includes(this.tipo_usuario)) throw new BadRequestException('El tipo de usuario no es valido');
    if(!Object.values(EstadoUsuario).includes(this.estado_usuario)) throw new BadRequestException('El estado del usaurio es invalido');
    if(!this.numero_documento) throw new BadRequestException('El numero de documento es obligatorio');
    if(!Object.values(TipoDocumento).includes(this.tipo_documento)) throw new BadRequestException('El tipo de documento no es valido')
  }
}
