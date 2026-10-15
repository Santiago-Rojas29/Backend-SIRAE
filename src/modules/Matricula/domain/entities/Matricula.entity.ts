export class Matricula {
  constructor(
    public readonly id_matricula: string,
    public aprendiz_id_FK: string,
    public ficha_id_FK: string,
    public estado: string,
    public fecha_inicio?: Date,
    public estado_sgva?: string,
    public cantidad_contratos_sgva?: number,
    public fecha_actualizacion_sgva?: Date,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.aprendiz_id_FK) throw new Error('El aprendiz es obligatorio');
    if (!this.ficha_id_FK) throw new Error('La ficha es obligatoria');
    if (!this.estado) throw new Error('El estado es obligatorio');
  }
}
