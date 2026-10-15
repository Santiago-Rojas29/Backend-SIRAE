import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CentroRepository } from '../../../domain/ports/Centro.repository';
import { Centro } from '../../../domain/entities/Centro.entity';
import { CentroOrmEntity } from '../../entities/Centro.orm-entity';

@Injectable()
export class CentroTypeOrmRepository implements CentroRepository {
  constructor(
    @InjectRepository(CentroOrmEntity)
    private readonly repo: Repository<CentroOrmEntity>,
  ) {}

  private toDomain(orm: CentroOrmEntity): Centro {
    return new Centro(orm.regional_id_FK,orm.nombre, orm.codigo,orm.direccion,orm.departamento,orm.municipio,orm.telefono,orm.correo, orm.id_centro, orm.created_at, orm.updated_at);
  }

  async crear(entity: Centro): Promise<Centro> {
    const orm = this.repo.create({regional_id_FK:entity.regional_id_FK, nombre: entity.nombre, codigo: entity.codigo,direccion: entity.direccion, municipio:entity.municipio, departamento:entity.departamento, telefono:entity.telefono, correo:entity.correo });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Centro[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Centro | null> {
    const orm = await this.repo.findOneBy({ id_centro: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Centro>): Promise<Centro> {
    await this.repo.update(id, { nombre: data.nombre, codigo: data.codigo,direccion: data.direccion, municipio:data.municipio, departamento:data.departamento, telefono:data.telefono, correo:data.correo });
    const orm = await this.repo.findOneBy({ id_centro: id });
    if (!orm) throw new Error(`Centro con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
