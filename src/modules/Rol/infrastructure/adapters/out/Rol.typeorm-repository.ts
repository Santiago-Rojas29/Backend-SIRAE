import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolRepository } from '../../../domain/ports/Rol.repository';
import { Rol } from '../../../domain/entities/Rol.entity';
import { RolOrmEntity } from '../../entities/Rol.orm-entity';

@Injectable()
export class RolTypeOrmRepository implements RolRepository {
  constructor(
    @InjectRepository(RolOrmEntity)
    private readonly repo: Repository<RolOrmEntity>,
  ) {}

  private toDomain(orm: RolOrmEntity): Rol {
    return new Rol(orm.id_rol, orm.nombre, orm.descripcion, orm.created_at, orm.updated_at);
  }

  async crear(entity: Rol): Promise<Rol> {
    const orm = this.repo.create({
      nombre: entity.nombre,
      descripcion: entity.descripcion,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Rol[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Rol | null> {
    const orm = await this.repo.findOneBy({ id_rol: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Rol>): Promise<Rol> {
    await this.repo.update(id, {
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.descripcion && { descripcion: data.descripcion }),
    });
    const orm = await this.repo.findOneBy({ id_rol: id });
    if (!orm) throw new Error(`Rol con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
