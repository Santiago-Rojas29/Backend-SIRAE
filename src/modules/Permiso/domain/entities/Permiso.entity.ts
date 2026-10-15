export class Permiso {
  constructor(
    public readonly id_permiso: string,
    public modulo: string,
    public accion: string,
    public descripcion: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.modulo) throw new Error('El modulo es obligatorio');
    if (!this.accion) throw new Error('La accion es obligatoria');
  }
}
