import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoNovedadRepository } from '../../../domain/ports/TipoNovedad.repository';
import { TipoNovedad } from '../../../domain/entities/TipoNovedad.entity';
import { TipoNovedadOrmEntity } from '../../entities/TipoNovedad.orm-entity';

@Injectable()
export class TipoNovedadTypeOrmRepository implements TipoNovedadRepository {
  constructor(
    @InjectRepository(TipoNovedadOrmEntity)
    private readonly repo: Repository<TipoNovedadOrmEntity>,
  ) {}

  private toDomain(orm: TipoNovedadOrmEntity): TipoNovedad {
    return new TipoNovedad(orm.id_tiponovedad, orm.codigo, orm.nombre, orm.descripcion, orm.created_at, orm.updated_at);
  }

  async crear(entity: TipoNovedad): Promise<TipoNovedad> {
    const orm = this.repo.create({
      codigo: entity.codigo,
      nombre: entity.nombre,
      descripcion: entity.descripcion,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<TipoNovedad[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<TipoNovedad | null> {
    const orm = await this.repo.findOneBy({ id_tiponovedad: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<TipoNovedad>): Promise<TipoNovedad> {
    await this.repo.update(id, {
      ...(data.codigo && { codigo: data.codigo }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.descripcion && { descripcion: data.descripcion }),
    });
    const orm = await this.repo.findOneBy({ id_tiponovedad: id });
    if (!orm) throw new Error(`Tipo de novedad con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
