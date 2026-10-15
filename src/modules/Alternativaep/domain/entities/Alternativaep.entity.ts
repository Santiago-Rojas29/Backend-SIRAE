export class Alternativaep {
  constructor(
    public readonly id_alternativaep: string,
    public categoria_ep_id_FK: string,
    public nombre: string,
    public texto_sofia: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.nombre) throw new Error('El nombre es obligatorio');
    if (!this.texto_sofia) throw new Error('El codigo es obligatorio');
    if(!this.categoria_ep_id_FK) throw new Error('La categoria de etapa productiva es obligatoria')
  }
}
