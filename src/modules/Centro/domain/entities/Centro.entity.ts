export class Centro {
  constructor(
    public readonly id_centro:string,
    public regional_id_FK:string,
    public codigo:string,
    public nombre:string,
    public direccion:string,
    public municipio:string,
    public departamento:string,
    public telefono:string,
    public correo:string,
    public created_at?:Date,
    public updated_at?:Date

    
  ) {}

  validar(): void {
    if(!this.nombre) throw new Error('El nombre es obligatorio');
    if(!this.codigo) throw new Error('El codigo es obligatorio');
    if(!this.regional_id_FK) throw new Error('El codigo de la regional es obligatorio');
    if(!this.telefono) throw new Error('El telefono es obligatorio');
    if(!this.correo) throw new Error('El correo es obligatorio')
    
    
  }
}
