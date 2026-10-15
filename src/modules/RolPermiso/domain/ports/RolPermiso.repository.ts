import { RolPermiso } from '../entities/RolPermiso.entity';

export interface RolPermisoRepository {
  crear(entity: RolPermiso): Promise<RolPermiso>;
  obtenerTodos(): Promise<RolPermiso[]>;
  obtenerPorId(id: string): Promise<RolPermiso | null>;
  actualizar(id: string, data: Partial<RolPermiso>): Promise<RolPermiso>;
  eliminar(id: string): Promise<void>;
}
