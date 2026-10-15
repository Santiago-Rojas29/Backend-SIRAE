import { Resolucion } from '../entities/Resolucion.entity';

export interface ResolucionRepository {
  crear(entity: Resolucion): Promise<Resolucion>;
  obtenerTodos(): Promise<Resolucion[]>;
  obtenerPorId(id: string): Promise<Resolucion | null>;
  actualizar(id: string, data: Partial<Resolucion>): Promise<Resolucion>;
  eliminar(id: string): Promise<void>;
}
