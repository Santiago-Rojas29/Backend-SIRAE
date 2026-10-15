import { Resultadoaprendizaje } from '../entities/Resultadoaprendizaje.entity';

export interface ResultadoaprendizajeRepository {
  crear(entity: Resultadoaprendizaje): Promise<Resultadoaprendizaje>;
  obtenerTodos(): Promise<Resultadoaprendizaje[]>;
  obtenerPorId(id: string): Promise<Resultadoaprendizaje | null>;
  actualizar(id: string, data: Partial<Resultadoaprendizaje>): Promise<Resultadoaprendizaje>;
  eliminar(id: string): Promise<void>;
}
