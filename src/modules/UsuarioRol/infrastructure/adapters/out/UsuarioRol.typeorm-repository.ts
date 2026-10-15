import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioRolRepository } from '../../../domain/ports/UsuarioRol.repository';
import { UsuarioRol } from '../../../domain/entities/UsuarioRol.entity';
import { UsuarioRolOrmEntity } from '../../entities/UsuarioRol.orm-entity';

@Injectable()
export class UsuarioRolTypeOrmRepository implements UsuarioRolRepository {
  constructor(
    @InjectRepository(UsuarioRolOrmEntity)
    private readonly repo: Repository<UsuarioRolOrmEntity>,
  ) {}

  private toDomain(orm: UsuarioRolOrmEntity): UsuarioRol {
    return new UsuarioRol(orm.id_usuariorol, orm.usuario_id_FK, orm.rol_id_FK, orm.created_at);
  }

  async crear(entity: UsuarioRol): Promise<UsuarioRol> {
    const orm = this.repo.create({
      usuario_id_FK: entity.usuario_id_FK,
      rol_id_FK: entity.rol_id_FK,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<UsuarioRol[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<UsuarioRol | null> {
    const orm = await this.repo.findOneBy({ id_usuariorol: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<UsuarioRol>): Promise<UsuarioRol> {
    await this.repo.update(id, {
      ...(data.usuario_id_FK && { usuario_id_FK: data.usuario_id_FK }),
      ...(data.rol_id_FK && { rol_id_FK: data.rol_id_FK }),
    });
    const orm = await this.repo.findOneBy({ id_usuariorol: id });
    if (!orm) throw new Error(`UsuarioRol con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
