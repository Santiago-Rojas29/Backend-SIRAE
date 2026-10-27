import { Tipocredencial } from '../entities/Tipocredencial.entity';

export interface TipocredencialRepository {
  crear(entity: Tipocredencial): Promise<Tipocredencial>;
  obtenerTodos(): Promise<Tipocredencial[]>;
  obtenerPorId(id: string): Promise<Tipocredencial | null>;
  actualizar(id: string, data: Partial<Tipocredencial>): Promise<Tipocredencial>;
  eliminar(id: string): Promise<void>;
}
