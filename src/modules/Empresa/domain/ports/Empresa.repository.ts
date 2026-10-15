import { Empresa } from '../entities/Empresa.entity';

export interface EmpresaRepository {
  crear(entity: Empresa): Promise<Empresa>;
  obtenerTodos(): Promise<Empresa[]>;
  obtenerPorId(id: string): Promise<Empresa | null>;
  actualizar(id: string, data: Partial<Empresa>): Promise<Empresa>;
  eliminar(id: string): Promise<void>;
}
