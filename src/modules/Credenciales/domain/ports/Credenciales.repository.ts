import { Credenciales } from '../entities/Credenciales.entity';

export interface CredencialesRepository {
  crear(entity: Credenciales): Promise<Credenciales>;
  obtenerTodos(): Promise<Credenciales[]>;
  obtenerPorId(id: string): Promise<Credenciales | null>;
  actualizar(id: string, data: Partial<Credenciales>): Promise<Credenciales>;
  eliminar(id: string): Promise<void>;
}
