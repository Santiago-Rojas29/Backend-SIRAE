import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FichaRepository } from '../../../domain/ports/Ficha.repository';
import { Ficha } from '../../../domain/entities/Ficha.entity';
import { FichaOrmEntity } from '../../entities/Ficha.orm-entity';

@Injectable()
export class FichaTypeOrmRepository implements FichaRepository {
  constructor(
    @InjectRepository(FichaOrmEntity)
    private readonly repo: Repository<FichaOrmEntity>,
  ) {}

  private toDomain(orm: FichaOrmEntity): Ficha {
    return new Ficha(
      orm.id_ficha,
      orm.centro_id_FK,
      orm.programa_id_FK,
      orm.numero,
      orm.origen,
      orm.fecha_inicio,
      orm.fecha_fin,
      orm.estado,
      orm.modalidad,
      orm.codigo_programa_especial,
      orm.programa_especial,
      orm.duracion_productiva_meses,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Ficha): Promise<Ficha> {
    const orm = this.repo.create({
      centro_id_FK: entity.centro_id_FK,
      programa_id_FK: entity.programa_id_FK,
      numero: entity.numero,
      origen: entity.origen,
      fecha_inicio: entity.fecha_inicio,
      fecha_fin: entity.fecha_fin,
      estado: entity.estado,
      modalidad: entity.modalidad,
      codigo_programa_especial: entity.codigo_programa_especial,
      programa_especial: entity.programa_especial,
      duracion_productiva_meses: entity.duracion_productiva_meses,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Ficha[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Ficha | null> {
    const orm = await this.repo.findOneBy({ id_ficha: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Ficha>): Promise<Ficha> {
    await this.repo.update(id, {
      ...(data.numero && { numero: data.numero }),
      ...(data.origen && { origen: data.origen }),
      ...(data.fecha_inicio && { fecha_inicio: data.fecha_inicio }),
      ...(data.fecha_fin && { fecha_fin: data.fecha_fin }),
      ...(data.estado && { estado: data.estado }),
      ...(data.modalidad && { modalidad: data.modalidad }),
      ...(data.codigo_programa_especial && { codigo_programa_especial: data.codigo_programa_especial }),
      ...(data.programa_especial && { programa_especial: data.programa_especial }),
      ...(data.duracion_productiva_meses !== undefined && { duracion_productiva_meses: data.duracion_productiva_meses }),
    });
    const orm = await this.repo.findOneBy({ id_ficha: id });
    if (!orm) throw new Error(`Ficha con id ${id} no encontrada`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
