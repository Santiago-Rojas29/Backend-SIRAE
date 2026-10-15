import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResultadoaprendizajeRepository } from '../../../domain/ports/Resultadoaprendizaje.repository';
import { Resultadoaprendizaje } from '../../../domain/entities/Resultadoaprendizaje.entity';
import { ResultadoaprendizajeOrmEntity } from '../../entities/Resultadoaprendizaje.orm-entity';

@Injectable()
export class ResultadoaprendizajeTypeOrmRepository implements ResultadoaprendizajeRepository {
  constructor(
    @InjectRepository(ResultadoaprendizajeOrmEntity)
    private readonly repo: Repository<ResultadoaprendizajeOrmEntity>,
  ) {}

  private toDomain(orm: ResultadoaprendizajeOrmEntity): Resultadoaprendizaje {
    return new Resultadoaprendizaje(
      orm.id_resultadoaprendizaje,
      orm.competencia_id_FK,
      orm.codigo,
      orm.nombre,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Resultadoaprendizaje): Promise<Resultadoaprendizaje> {
    const orm = this.repo.create({
      competencia_id_FK: entity.competencia_id_FK,
      codigo: entity.codigo,
      nombre: entity.nombre,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Resultadoaprendizaje[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Resultadoaprendizaje | null> {
    const orm = await this.repo.findOneBy({ id_resultadoaprendizaje: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Resultadoaprendizaje>): Promise<Resultadoaprendizaje> {
    await this.repo.update(id, {
      ...(data.competencia_id_FK && { competencia_id_FK: data.competencia_id_FK }),
      ...(data.codigo && { codigo: data.codigo }),
      ...(data.nombre && { nombre: data.nombre }),
    });
    const orm = await this.repo.findOneBy({ id_resultadoaprendizaje: id });
    if (!orm) throw new Error(`Resultado de aprendizaje con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
