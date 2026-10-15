import { CategoriaEp } from '../entities/CategoriaEp.entity';

export interface CategoriaEpRepository {
  crear(entity: CategoriaEp): Promise<CategoriaEp>;
  obtenerTodos(): Promise<CategoriaEp[]>;
  obtenerPorId(id: string): Promise<CategoriaEp | null>;
  actualizar(id: string, data: Partial<CategoriaEp>): Promise<CategoriaEp>;
  eliminar(id: string): Promise<void>;
}
