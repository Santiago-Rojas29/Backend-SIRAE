export class Rol {
  constructor(
    public readonly id_rol: string,
    public nombre: string,
    public descripcion: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.nombre) throw new Error('El nombre es obligatorio');
  }
}
