import { Competencia } from '../entities/Competencia.entity';

export interface CompetenciaRepository {
  crear(entity: Competencia): Promise<Competencia>;
  obtenerTodos(): Promise<Competencia[]>;
  obtenerPorId(id: string): Promise<Competencia | null>;
  actualizar(id: string, data: Partial<Competencia>): Promise<Competencia>;
  eliminar(id: string): Promise<void>;
}
