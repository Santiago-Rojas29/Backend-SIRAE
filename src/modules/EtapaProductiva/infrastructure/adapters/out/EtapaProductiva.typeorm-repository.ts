import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EtapaProductivaRepository } from '../../../domain/ports/EtapaProductiva.repository';
import { EtapaProductiva } from '../../../domain/entities/EtapaProductiva.entity';
import { EtapaProductivaOrmEntity } from '../../entities/EtapaProductiva.orm-entity';

@Injectable()
export class EtapaProductivaTypeOrmRepository implements EtapaProductivaRepository {
  constructor(
    @InjectRepository(EtapaProductivaOrmEntity)
    private readonly repo: Repository<EtapaProductivaOrmEntity>,
  ) {}

  private toDomain(orm: EtapaProductivaOrmEntity): EtapaProductiva {
    return new EtapaProductiva(
      orm.id_etapaproductiva,
      orm.seleccion_ep_id_FK,
      orm.fecha_inicio,
      orm.fecha_fin,
      orm.estado,
      orm.ente_cooformador,
      orm.coordinador_academico,
      orm.instructor_seguimiento,
      orm.fecha_remision_subdirector,
      orm.fecha_registro_sofia,
      orm.observaciones,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: EtapaProductiva): Promise<EtapaProductiva> {
    const orm = this.repo.create({
      seleccion_ep_id_FK: entity.seleccion_ep_id_FK,
      fecha_inicio: entity.fecha_inicio,
      fecha_fin: entity.fecha_fin,
      estado: entity.estado,
      ente_cooformador: entity.ente_cooformador,
      coordinador_academico: entity.coordinador_academico,
      instructor_seguimiento: entity.instructor_seguimiento,
      fecha_remision_subdirector: entity.fecha_remision_subdirector,
      fecha_registro_sofia: entity.fecha_registro_sofia,
      observaciones: entity.observaciones,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<EtapaProductiva[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<EtapaProductiva | null> {
    const orm = await this.repo.findOneBy({ id_etapaproductiva: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<EtapaProductiva>): Promise<EtapaProductiva> {
    await this.repo.update(id, {
      ...(data.fecha_inicio && { fecha_inicio: data.fecha_inicio }),
      ...(data.fecha_fin && { fecha_fin: data.fecha_fin }),
      ...(data.estado && { estado: data.estado }),
      ...(data.ente_cooformador && { ente_cooformador: data.ente_cooformador }),
      ...(data.coordinador_academico && { coordinador_academico: data.coordinador_academico }),
      ...(data.instructor_seguimiento && { instructor_seguimiento: data.instructor_seguimiento }),
      ...(data.fecha_remision_subdirector && { fecha_remision_subdirector: data.fecha_remision_subdirector }),
      ...(data.fecha_registro_sofia && { fecha_registro_sofia: data.fecha_registro_sofia }),
      ...(data.observaciones && { observaciones: data.observaciones }),
    });
    const orm = await this.repo.findOneBy({ id_etapaproductiva: id });
    if (!orm) throw new Error(`EtapaProductiva con id ${id} no encontrada`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
