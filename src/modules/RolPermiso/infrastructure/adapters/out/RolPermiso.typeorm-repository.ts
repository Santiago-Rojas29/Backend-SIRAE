import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolPermisoRepository } from '../../../domain/ports/RolPermiso.repository';
import { RolPermiso } from '../../../domain/entities/RolPermiso.entity';
import { RolPermisoOrmEntity } from '../../entities/RolPermiso.orm-entity';

@Injectable()
export class RolPermisoTypeOrmRepository implements RolPermisoRepository {
  constructor(
    @InjectRepository(RolPermisoOrmEntity)
    private readonly repo: Repository<RolPermisoOrmEntity>,
  ) {}

  private toDomain(orm: RolPermisoOrmEntity): RolPermiso {
    return new RolPermiso(orm.id_rolpermiso, orm.rol_id_FK, orm.permiso_id_FK, orm.created_at);
  }

  async crear(entity: RolPermiso): Promise<RolPermiso> {
    const orm = this.repo.create({
      rol_id_FK: entity.rol_id_FK,
      permiso_id_FK: entity.permiso_id_FK,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<RolPermiso[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<RolPermiso | null> {
    const orm = await this.repo.findOneBy({ id_rolpermiso: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<RolPermiso>): Promise<RolPermiso> {
    await this.repo.update(id, {
      ...(data.rol_id_FK && { rol_id_FK: data.rol_id_FK }),
      ...(data.permiso_id_FK && { permiso_id_FK: data.permiso_id_FK }),
    });
    const orm = await this.repo.findOneBy({ id_rolpermiso: id });
    if (!orm) throw new Error(`RolPermiso con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
