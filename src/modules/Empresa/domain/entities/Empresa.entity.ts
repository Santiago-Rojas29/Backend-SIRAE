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
    if (!this.nit) throw new Error('El nit es obligatorio');
    if (!this.razon_social) throw new Error('La razon social es obligatoria');
    if (!this.direccion) throw new Error('La direccion es obligatorio');
    if (!this.telefono) throw new Error('El telefono es obligatorio');
    if (!this.correo) throw new Error('El correo es obligatorio');
    if (!this.ciudad) throw new Error('La ciudad es obligatoria');
    if (!this.departamento) throw new Error('El departamento es obligatorio')
  }
}
