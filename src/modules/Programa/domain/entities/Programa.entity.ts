export class Programa {
  constructor(
    public readonly id_programa: string,
    public codigo: string,
    public version: string,
    public nombre: string,
    public nivel_formacion: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.codigo) throw new Error('El codigo es obligatorio');
    if (!this.version) throw new Error('La version es obligatoria');
    if (!this.nombre) throw new Error('El nombre es obligatorio');
    if (!this.nivel_formacion) throw new Error('El nivel de formacion es obligatorio');
  }
}
