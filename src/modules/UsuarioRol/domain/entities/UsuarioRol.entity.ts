export class UsuarioRol {
  constructor(
    public readonly id_usuariorol: string,
    public usuario_id_FK: string,
    public rol_id_FK: string,
    public created_at?: Date,
  ) {}

  validar(): void {
    if (!this.usuario_id_FK) throw new Error('El usuario es obligatorio');
    if (!this.rol_id_FK) throw new Error('El rol es obligatorio');
  }
}
