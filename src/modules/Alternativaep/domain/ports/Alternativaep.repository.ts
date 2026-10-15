import { Alternativaep } from '../entities/Alternativaep.entity';

export interface AlternativaepRepository {
  crear(entity: Alternativaep): Promise<Alternativaep>;
  obtenerTodos(): Promise<Alternativaep[]>;
  obtenerPorId(id: string): Promise<Alternativaep | null>;
  actualizar(id: string, data: Partial<Alternativaep>): Promise<Alternativaep>;
  eliminar(id: string): Promise<void>;
}
