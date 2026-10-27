import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobEjecutionRepository } from '../../../domain/ports/JobEjecution.repository';
import { JobEjecution } from '../../../domain/entities/JobEjecution.entity';
import { JobEjecutionOrmEntity } from '../../entities/JobEjecution.orm-entity';

@Injectable()
export class JobEjecutionTypeOrmRepository implements JobEjecutionRepository {
  constructor(
    @InjectRepository(JobEjecutionOrmEntity)
    private readonly repo: Repository<JobEjecutionOrmEntity>,
  ) {}

  private toDomain(orm: JobEjecutionOrmEntity): JobEjecution {
    return new JobEjecution(
      orm.id_jobejecution,
      orm.usuario_id_FK,
      orm.credencial_id_FK,
      orm.tipo,
      orm.disparado_por,
      orm.estado,
      orm.fecha_incio,
      orm.total_items,
      orm.items_procesados,
      orm.fecha_fin,
      orm.errores,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: JobEjecution): Promise<JobEjecution> {
    const orm = this.repo.create({
      usuario_id_FK: entity.usuario_id_FK,
      credencial_id_FK: entity.credencial_id_FK,
      tipo: entity.tipo,
      disparado_por: entity.disparado_por,
      estado: entity.estado,
      fecha_incio: entity.fecha_incio,
      total_items: entity.total_items,
      items_procesados: entity.items_procesados,
      fecha_fin: entity.fecha_fin,
      errores: entity.errores,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<JobEjecution[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<JobEjecution | null> {
    const orm = await this.repo.findOneBy({ id_jobejecution: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<JobEjecution>): Promise<JobEjecution> {
    await this.repo.update(id, {
      ...(data.estado && { estado: data.estado }),
      ...(data.total_items !== undefined && { total_items: data.total_items }),
      ...(data.items_procesados !== undefined && { items_procesados: data.items_procesados }),
      ...(data.fecha_fin && { fecha_fin: data.fecha_fin }),
      ...(data.errores !== undefined && { errores: data.errores }),
    });
    const orm = await this.repo.findOneBy({ id_jobejecution: id });
    if (!orm) throw new Error(`JobEjecution con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
