import { Novedad } from '../entities/Novedad.entity';

export interface NovedadRepository {
  crear(entity: Novedad): Promise<Novedad>;
  obtenerTodos(): Promise<Novedad[]>;
  obtenerPorId(id: string): Promise<Novedad | null>;
  actualizar(id: string, data: Partial<Novedad>): Promise<Novedad>;
  eliminar(id: string): Promise<void>;
}
