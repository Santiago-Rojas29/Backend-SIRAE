import { SeleccionEp } from '../entities/SeleccionEp.entity';

export interface SeleccionEpRepository {
  crear(entity: SeleccionEp): Promise<SeleccionEp>;
  obtenerTodos(): Promise<SeleccionEp[]>;
  obtenerPorId(id: string): Promise<SeleccionEp | null>;
  actualizar(id: string, data: Partial<SeleccionEp>): Promise<SeleccionEp>;
  eliminar(id: string): Promise<void>;
}
