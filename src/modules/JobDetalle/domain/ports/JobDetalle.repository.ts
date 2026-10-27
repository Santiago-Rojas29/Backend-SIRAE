import { JobDetalle } from '../entities/JobDetalle.entity';

export interface JobDetalleRepository {
  crear(entity: JobDetalle): Promise<JobDetalle>;
  obtenerTodos(): Promise<JobDetalle[]>;
  obtenerPorId(id: string): Promise<JobDetalle | null>;
  actualizar(id: string, data: Partial<JobDetalle>): Promise<JobDetalle>;
  eliminar(id: string): Promise<void>;
}
