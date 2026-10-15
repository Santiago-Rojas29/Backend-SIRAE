import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NovedadRepository } from '../../../domain/ports/Novedad.repository';
import { Novedad } from '../../../domain/entities/Novedad.entity';
import { NovedadOrmEntity } from '../../entities/Novedad.orm-entity';

@Injectable()
export class NovedadTypeOrmRepository implements NovedadRepository {
  constructor(
    @InjectRepository(NovedadOrmEntity)
    private readonly repo: Repository<NovedadOrmEntity>,
  ) {}

  private toDomain(orm: NovedadOrmEntity): Novedad {
    return new Novedad(
      orm.id_novedad,
      orm.matricula_id_FK,
      orm.tipo_novedad_id_FK,
      orm.fecha_novedad,
      orm.solicitud_respondida,
      orm.estado_registro,
      orm.resolucion_id_FK,
      orm.fecha_registro_sofia,
      orm.verificacion,
      orm.observaciones,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Novedad): Promise<Novedad> {
    const orm = this.repo.create({
      matricula_id_FK: entity.matricula_id_FK,
      tipo_novedad_id_FK: entity.tipo_novedad_id_FK,
      resolucion_id_FK: entity.resolucion_id_FK,
      fecha_novedad: entity.fecha_novedad,
      solicitud_respondida: entity.solicitud_respondida,
      estado_registro: entity.estado_registro,
      fecha_registro_sofia: entity.fecha_registro_sofia,
      verificacion: entity.verificacion,
      observaciones: entity.observaciones,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Novedad[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Novedad | null> {
    const orm = await this.repo.findOneBy({ id_novedad: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Novedad>): Promise<Novedad> {
    await this.repo.update(id, {
      ...(data.resolucion_id_FK !== undefined && { resolucion_id_FK: data.resolucion_id_FK }),
      ...(data.fecha_novedad && { fecha_novedad: data.fecha_novedad }),
      ...(data.solicitud_respondida !== undefined && { solicitud_respondida: data.solicitud_respondida }),
      ...(data.estado_registro && { estado_registro: data.estado_registro }),
      ...(data.fecha_registro_sofia !== undefined && { fecha_registro_sofia: data.fecha_registro_sofia }),
      ...(data.verificacion !== undefined && { verificacion: data.verificacion }),
      ...(data.observaciones !== undefined && { observaciones: data.observaciones }),
    });
    const orm = await this.repo.findOneBy({ id_novedad: id });
    if (!orm) throw new Error(`Novedad con id ${id} no encontrada`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
