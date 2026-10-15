export class Resolucion {
  constructor(
    public readonly id_resolucion: string,
    public numero: string,
    public anio: number,
    public fecha: Date,
    public tipo?: string,
    public observaciones?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.numero) throw new Error('El numero es obligatorio');
    if (!this.anio) throw new Error('El anio es obligatorio');
    if (!this.fecha) throw new Error('La fecha es obligatoria');
  }
}
