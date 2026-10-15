import { Matricula } from '../entities/Matricula.entity';

export interface MatriculaRepository {
  crear(entity: Matricula): Promise<Matricula>;
  obtenerTodos(): Promise<Matricula[]>;
  obtenerPorId(id: string): Promise<Matricula | null>;
  actualizar(id: string, data: Partial<Matricula>): Promise<Matricula>;
  eliminar(id: string): Promise<void>;
}
