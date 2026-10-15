export class CategoriaEp {
  constructor(
    public readonly id_categoriaep: string,
    public nombre: string,
    public nombre_sofia: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.nombre) throw new Error('El nombre es obligatorio');
    if (!this.nombre_sofia) throw new Error('El nombre de sofia es obligatorio');
  }
}
