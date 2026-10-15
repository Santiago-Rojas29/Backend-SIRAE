import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompetenciaRepository } from '../../../domain/ports/Competencia.repository';
import { Competencia } from '../../../domain/entities/Competencia.entity';
import { CompetenciaOrmEntity } from '../../entities/Competencia.orm-entity';

@Injectable()
export class CompetenciaTypeOrmRepository implements CompetenciaRepository {
  constructor(
    @InjectRepository(CompetenciaOrmEntity)
    private readonly repo: Repository<CompetenciaOrmEntity>,
  ) {}

  private toDomain(orm: CompetenciaOrmEntity): Competencia {
    return new Competencia(
      orm.id_competencia,
      orm.programa_id_FK,
      orm.codigo,
      orm.nombre,
      orm.es_etapa_productiva,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Competencia): Promise<Competencia> {
    const orm = this.repo.create({
      programa_id_FK: entity.programa_id_FK,
      codigo: entity.codigo,
      nombre: entity.nombre,
      es_etapa_productiva: entity.es_etapa_productiva,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Competencia[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Competencia | null> {
    const orm = await this.repo.findOneBy({ id_competencia: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Competencia>): Promise<Competencia> {
    await this.repo.update(id, {
      ...(data.codigo && { codigo: data.codigo }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.es_etapa_productiva !== undefined && { es_etapa_productiva: data.es_etapa_productiva }),
    });
    const orm = await this.repo.findOneBy({ id_competencia: id });
    if (!orm) throw new Error(`Competencia con id ${id} no encontrada`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
