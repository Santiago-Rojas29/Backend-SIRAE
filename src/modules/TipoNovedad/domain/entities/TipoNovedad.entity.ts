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
    if (!this.codigo) throw new Error('El codigo es obligatorio');
    if (!this.nombre) throw new Error('El nombre es obligatorio');
    if (!this.descripcion) throw new Error('La descripcion es obligatoria');
  }
}
