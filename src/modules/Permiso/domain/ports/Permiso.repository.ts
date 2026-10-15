import { Permiso } from '../entities/Permiso.entity';

export interface PermisoRepository {
  crear(entity: Permiso): Promise<Permiso>;
  obtenerTodos(): Promise<Permiso[]>;
  obtenerPorId(id: string): Promise<Permiso | null>;
  actualizar(id: string, data: Partial<Permiso>): Promise<Permiso>;
  eliminar(id: string): Promise<void>;
}
