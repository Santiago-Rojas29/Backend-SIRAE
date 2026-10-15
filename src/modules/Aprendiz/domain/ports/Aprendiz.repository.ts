import { Aprendiz } from '../entities/Aprendiz.entity';

export interface AprendizRepository {
  crear(entity: Aprendiz): Promise<Aprendiz>;
  obtenerTodos(): Promise<Aprendiz[]>;
  obtenerPorId(id: string): Promise<Aprendiz | null>;
  actualizar(id: string, data: Partial<Aprendiz>): Promise<Aprendiz>;
  eliminar(id: string): Promise<void>;
}
