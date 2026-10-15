import { Rol } from '../entities/Rol.entity';

export interface RolRepository {
  crear(entity: Rol): Promise<Rol>;
  obtenerTodos(): Promise<Rol[]>;
  obtenerPorId(id: string): Promise<Rol | null>;
  actualizar(id: string, data: Partial<Rol>): Promise<Rol>;
  eliminar(id: string): Promise<void>;
}
