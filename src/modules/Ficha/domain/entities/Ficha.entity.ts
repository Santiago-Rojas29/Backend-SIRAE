export enum OrigenFicha {
  DF49 = 'df49',
  P04 = 'p04',
  Manual = 'manual',
  Certificados = 'certificados',
}

export class Ficha {
  constructor(
    public readonly id_ficha: string,
    public centro_id_FK: string,
    public programa_id_FK: string,
    public numero: string,
    public origen: OrigenFicha,
    public fecha_inicio?: Date,
    public fecha_fin?: Date,
    public estado?: string,
    public modalidad?: string,
    public codigo_programa_especial?: string,
    public programa_especial?: string,
    public duracion_productiva_meses?: number,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.numero) throw new Error('El numero es obligatorio');
    if (!this.centro_id_FK) throw new Error('El centro es obligatorio');
    if (!this.programa_id_FK) throw new Error('El programa es obligatorio');
    if (!Object.values(OrigenFicha).includes(this.origen)) throw new Error('El origen no es valido');
  }
}
