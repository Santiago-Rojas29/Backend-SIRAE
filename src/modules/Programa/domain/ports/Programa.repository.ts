import { Programa } from '../entities/Programa.entity';

export interface ProgramaRepository {
  crear(entity: Programa): Promise<Programa>;
  obtenerTodos(): Promise<Programa[]>;
  obtenerPorId(id: string): Promise<Programa | null>;
  actualizar(id: string, data: Partial<Programa>): Promise<Programa>;
  eliminar(id: string): Promise<void>;
}
