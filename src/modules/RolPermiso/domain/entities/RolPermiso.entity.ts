export class RolPermiso {
  constructor(
    public readonly id_rolpermiso: string,
    public rol_id_FK: string,
    public permiso_id_FK: string,
    public created_at?: Date,
  ) {}

  validar(): void {
    if (!this.rol_id_FK) throw new Error('El rol es obligatorio');
    if (!this.permiso_id_FK) throw new Error('El permiso es obligatorio');
  }
}
