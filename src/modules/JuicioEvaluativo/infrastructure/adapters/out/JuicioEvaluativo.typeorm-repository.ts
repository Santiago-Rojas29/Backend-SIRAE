import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JuicioEvaluativoRepository } from '../../../domain/ports/JuicioEvaluativo.repository';
import { JuicioEvaluativo } from '../../../domain/entities/JuicioEvaluativo.entity';
import { JuicioEvaluativoOrmEntity } from '../../entities/JuicioEvaluativo.orm-entity';

@Injectable()
export class JuicioEvaluativoTypeOrmRepository implements JuicioEvaluativoRepository {
  constructor(
    @InjectRepository(JuicioEvaluativoOrmEntity)
    private readonly repo: Repository<JuicioEvaluativoOrmEntity>,
  ) {}

  private toDomain(orm: JuicioEvaluativoOrmEntity): JuicioEvaluativo {
    return new JuicioEvaluativo(
      orm.id_juicioevaluativo,
      orm.matricula_id_FK,
      orm.resultado_aprendizaje_id_FK,
      orm.calificacion,
      orm.fecha_hora,
      orm.funcionario,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: JuicioEvaluativo): Promise<JuicioEvaluativo> {
    const orm = this.repo.create({
      matricula_id_FK: entity.matricula_id_FK,
      resultado_aprendizaje_id_FK: entity.resultado_aprendizaje_id_FK,
      calificacion: entity.calificacion,
      fecha_hora: entity.fecha_hora,
      funcionario: entity.funcionario,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<JuicioEvaluativo[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<JuicioEvaluativo | null> {
    const orm = await this.repo.findOneBy({ id_juicioevaluativo: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<JuicioEvaluativo>): Promise<JuicioEvaluativo> {
    await this.repo.update(id, {
      ...(data.calificacion && { calificacion: data.calificacion }),
      ...(data.fecha_hora && { fecha_hora: data.fecha_hora }),
      ...(data.funcionario && { funcionario: data.funcionario }),
    });
    const orm = await this.repo.findOneBy({ id_juicioevaluativo: id });
    if (!orm) throw new Error(`Juicio evaluativo con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
