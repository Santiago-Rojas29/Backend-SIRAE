import { ContratoAprendizaje } from '../entities/ContratoAprendizaje.entity';

export interface ContratoAprendizajeRepository {
  crear(entity: ContratoAprendizaje): Promise<ContratoAprendizaje>;
  obtenerTodos(): Promise<ContratoAprendizaje[]>;
  obtenerPorId(id: string): Promise<ContratoAprendizaje | null>;
  actualizar(id: string, data: Partial<ContratoAprendizaje>): Promise<ContratoAprendizaje>;
  eliminar(id: string): Promise<void>;
}
