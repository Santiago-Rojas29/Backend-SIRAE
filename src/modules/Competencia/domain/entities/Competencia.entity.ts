export class Competencia {
  constructor(
    public readonly id_competencia: string,
    public programa_id_FK: string,
    public codigo: string,
    public nombre: string,
    public es_etapa_productiva: boolean,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.programa_id_FK) throw new Error('El programa es obligatorio');
    if (!this.codigo) throw new Error('El codigo es obligatorio');
    if (!this.nombre) throw new Error('El nombre es obligatorio');
  }
}
