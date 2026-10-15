import { UsuarioRol } from '../entities/UsuarioRol.entity';

export interface UsuarioRolRepository {
  crear(entity: UsuarioRol): Promise<UsuarioRol>;
  obtenerTodos(): Promise<UsuarioRol[]>;
  obtenerPorId(id: string): Promise<UsuarioRol | null>;
  actualizar(id: string, data: Partial<UsuarioRol>): Promise<UsuarioRol>;
  eliminar(id: string): Promise<void>;
}
