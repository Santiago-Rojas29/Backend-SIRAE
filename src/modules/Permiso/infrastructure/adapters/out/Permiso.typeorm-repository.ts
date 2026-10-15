import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermisoRepository } from '../../../domain/ports/Permiso.repository';
import { Permiso } from '../../../domain/entities/Permiso.entity';
import { PermisoOrmEntity } from '../../entities/Permiso.orm-entity';

@Injectable()
export class PermisoTypeOrmRepository implements PermisoRepository {
  constructor(
    @InjectRepository(PermisoOrmEntity)
    private readonly repo: Repository<PermisoOrmEntity>,
  ) {}

  private toDomain(orm: PermisoOrmEntity): Permiso {
    return new Permiso(orm.id_permiso, orm.modulo, orm.accion, orm.descripcion, orm.created_at, orm.updated_at);
  }

  async crear(entity: Permiso): Promise<Permiso> {
    const orm = this.repo.create({
      modulo: entity.modulo,
      accion: entity.accion,
      descripcion: entity.descripcion,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Permiso[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Permiso | null> {
    const orm = await this.repo.findOneBy({ id_permiso: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Permiso>): Promise<Permiso> {
    await this.repo.update(id, {
      ...(data.modulo && { modulo: data.modulo }),
      ...(data.accion && { accion: data.accion }),
      ...(data.descripcion && { descripcion: data.descripcion }),
    });
    const orm = await this.repo.findOneBy({ id_permiso: id });
    if (!orm) throw new Error(`Permiso con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
