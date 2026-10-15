
export enum EstadoCredencial{
  'ACTIVA'='activa',
  'INACTICA'='inactiva',
  'INVALIDA'='invalida',
  'ROLES_INCOMPLETOS'='roles_incompletos'
}


export class Credenciales {
  constructor(
    public readonly id_credenciales: string,
    public centro_id_FK: string,
    public tipo_plataforma: string,
    public datos_encryptados: string,
    public iv: string,
    public auth_tag: string,
    public Estado:EstadoCredencial,
    public roles_disponibles: string,
    public fecha_verificación?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.centro_id_FK) throw new Error('El centro es obligatorio');
    if (!this.tipo_plataforma) throw new Error('El codigo es obligatorio');
  }
}
