import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobDetalleRepository } from '../../../domain/ports/JobDetalle.repository';
import { JobDetalle } from '../../../domain/entities/JobDetalle.entity';
import { JobDetalleOrmEntity } from '../../entities/JobDetalle.orm-entity';

@Injectable()
export class JobDetalleTypeOrmRepository implements JobDetalleRepository {
  constructor(
    @InjectRepository(JobDetalleOrmEntity)
    private readonly repo: Repository<JobDetalleOrmEntity>,
  ) {}

  private toDomain(orm: JobDetalleOrmEntity): JobDetalle {
    return new JobDetalle(
      orm.id_jobdetalle,
      orm.job_ejecution_id_FK,
      orm.matricula_id_FK,
      orm.ficha_id_FK,
      orm.referencia,
      orm.resultado,
      orm.mensaje,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: JobDetalle): Promise<JobDetalle> {
    const orm = this.repo.create({
      job_ejecution_id_FK: entity.job_ejecution_id_FK,
      matricula_id_FK: entity.matricula_id_FK,
      ficha_id_FK: entity.ficha_id_FK,
      referencia: entity.referencia,
      resultado: entity.resultado,
      mensaje: entity.mensaje,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<JobDetalle[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<JobDetalle | null> {
    const orm = await this.repo.findOneBy({ id_jobdetalle: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<JobDetalle>): Promise<JobDetalle> {
    await this.repo.update(id, {
      ...(data.referencia && { referencia: data.referencia }),
      ...(data.resultado && { resultado: data.resultado }),
      ...(data.mensaje && { mensaje: data.mensaje }),
    });
    const orm = await this.repo.findOneBy({ id_jobdetalle: id });
    if (!orm) throw new Error(`JobDetalle con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
