import { ArchivoProcesado } from '../entities/ArchivoProcesado.entity';

export interface ArchivoProcesadoRepository {
  crear(entity: ArchivoProcesado): Promise<ArchivoProcesado>;
  obtenerTodos(): Promise<ArchivoProcesado[]>;
  obtenerPorId(id: string): Promise<ArchivoProcesado | null>;
  actualizar(id: string, data: Partial<ArchivoProcesado>): Promise<ArchivoProcesado>;
  eliminar(id: string): Promise<void>;
}
