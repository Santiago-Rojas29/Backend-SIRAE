import { JuicioEvaluativo } from '../entities/JuicioEvaluativo.entity';

export interface JuicioEvaluativoRepository {
  crear(entity: JuicioEvaluativo): Promise<JuicioEvaluativo>;
  obtenerTodos(): Promise<JuicioEvaluativo[]>;
  obtenerPorId(id: string): Promise<JuicioEvaluativo | null>;
  actualizar(id: string, data: Partial<JuicioEvaluativo>): Promise<JuicioEvaluativo>;
  eliminar(id: string): Promise<void>;
}
