import { TipoNovedad } from '../entities/TipoNovedad.entity';

export interface TipoNovedadRepository {
  crear(entity: TipoNovedad): Promise<TipoNovedad>;
  obtenerTodos(): Promise<TipoNovedad[]>;
  obtenerPorId(id: string): Promise<TipoNovedad | null>;
  actualizar(id: string, data: Partial<TipoNovedad>): Promise<TipoNovedad>;
  eliminar(id: string): Promise<void>;
}
