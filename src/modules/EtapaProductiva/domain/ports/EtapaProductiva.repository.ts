import { EtapaProductiva } from '../entities/EtapaProductiva.entity';

export interface EtapaProductivaRepository {
  crear(entity: EtapaProductiva): Promise<EtapaProductiva>;
  obtenerTodos(): Promise<EtapaProductiva[]>;
  obtenerPorId(id: string): Promise<EtapaProductiva | null>;
  actualizar(id: string, data: Partial<EtapaProductiva>): Promise<EtapaProductiva>;
  eliminar(id: string): Promise<void>;
}
