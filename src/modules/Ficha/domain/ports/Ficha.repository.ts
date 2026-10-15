import { Ficha } from '../entities/Ficha.entity';

export interface FichaRepository {
  crear(entity: Ficha): Promise<Ficha>;
  obtenerTodos(): Promise<Ficha[]>;
  obtenerPorId(id: string): Promise<Ficha | null>;
  actualizar(id: string, data: Partial<Ficha>): Promise<Ficha>;
  eliminar(id: string): Promise<void>;
}
