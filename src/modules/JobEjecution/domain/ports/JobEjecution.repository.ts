import { JobEjecution } from '../entities/JobEjecution.entity';

export interface JobEjecutionRepository {
  crear(entity: JobEjecution): Promise<JobEjecution>;
  obtenerTodos(): Promise<JobEjecution[]>;
  obtenerPorId(id: string): Promise<JobEjecution | null>;
  actualizar(id: string, data: Partial<JobEjecution>): Promise<JobEjecution>;
  eliminar(id: string): Promise<void>;
}
