export enum TipoDocumento {
  CC = 'cc',
  TI = 'ti',
  CE = 'ce',
  PASAPORTE = 'pasaporte',
}

export enum Genero {
  Masculino = 'masculino',
  Femenino = 'femenino',
}

export class Aprendiz {
  constructor(
    public readonly id_aprendiz: string,
    public tipo_documento: TipoDocumento,
    public numero_documento: string,
    public nombre: string,
    public apellidos: string,
    public fecha_nacimiento?: Date,
    public genero?: Genero,
    public estrato?: string,
    public celular?: string,
    public correo?: string,
    public direccion?: string,
    public municipio?: string,
    public discapacidad?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!Object.values(TipoDocumento).includes(this.tipo_documento)) throw new Error('El tipo de documento no es valido');
    if (!this.numero_documento) throw new Error('El numero de documento es obligatorio');
    if (!this.nombre) throw new Error('El nombre es obligatorio');
    if (!this.apellidos) throw new Error('Los apellidos son obligatorios');
  }
}
