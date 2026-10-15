import { Regional } from '../entities/Regional.entity';

export interface RegionalRepository {
  crear(entity: Regional): Promise<Regional>;
  obtenerTodos(): Promise<Regional[]>;
  obtenerPorId(id:string): Promise<Regional | null>;
  actualizar(id:string, data:Partial<Regional>): Promise<Regional>;
  eliminar(id:string):Promise<void>;
}
