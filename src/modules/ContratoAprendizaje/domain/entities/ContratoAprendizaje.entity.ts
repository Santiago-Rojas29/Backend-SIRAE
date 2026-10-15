export class ContratoAprendizaje {
  constructor(
    public readonly id_contratoaprendizaje: string,
    public etapa_productiva_id_FK: string,
    public empresa_id_FK: string,
    public numero_contrato: string,
    public fecha_inicio: Date,
    public fecha_fin: Date,
    public estado: string,
    public nit_eps: string,
    public nombre_eps: string,
    public nit_arl: string,
    public nombre_arl: string,
    public contrato_cedido_a?: string,
    public fecha_registro_sgva?: Date,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.etapa_productiva_id_FK) throw new Error('La etapa productiva es obligatoria');
    if (!this.empresa_id_FK) throw new Error('La empresa es obligatoria');
    if (!this.numero_contrato) throw new Error('El numero de contrato es obligatorio');
    if (!this.fecha_inicio) throw new Error('La fecha de inicio es obligatoria');
    if (!this.fecha_fin) throw new Error('La fecha de fin es obligatoria');
    if (!this.estado) throw new Error('El estado es obligatorio');
    if (!this.nit_eps) throw new Error('El nit de la EPS es obligatorio');
    if (!this.nombre_eps) throw new Error('El nombre de la EPS es obligatorio');
    if (!this.nit_arl) throw new Error('El nit de la ARL es obligatorio');
    if (!this.nombre_arl) throw new Error('El nombre de la ARL es obligatorio');
  }
}
