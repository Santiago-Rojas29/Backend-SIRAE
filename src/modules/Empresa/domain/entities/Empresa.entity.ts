import { BadRequestException } from '@nestjs/common';

export class Empresa {
  constructor(
    public readonly id_empresa: string,
    public nit: string,
    public razon_social: string,
    public direccion:string,
    public telefono: string,
    public correo:string,
    public ciudad:string,
    public departamento:string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.nit) throw new BadRequestException('El nit es obligatorio');
    if (!this.razon_social) throw new BadRequestException('La razon social es obligatoria');
    if (!this.direccion) throw new BadRequestException('La direccion es obligatorio');
    if (!this.telefono) throw new BadRequestException('El telefono es obligatorio');
    if (!this.correo) throw new BadRequestException('El correo es obligatorio');
    if (!this.ciudad) throw new BadRequestException('La ciudad es obligatoria');
    if (!this.departamento) throw new BadRequestException('El departamento es obligatorio')
  }
}
