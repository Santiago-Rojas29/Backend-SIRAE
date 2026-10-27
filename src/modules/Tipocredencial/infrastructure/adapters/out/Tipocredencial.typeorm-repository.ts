import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipocredencialRepository } from '../../../domain/ports/Tipocredencial.repository';
import { Tipocredencial } from '../../../domain/entities/Tipocredencial.entity';
import { TipocredencialOrmEntity } from '../../entities/Tipocredencial.orm-entity';

@Injectable()
export class TipocredencialTypeOrmRepository implements TipocredencialRepository {
  constructor(
    @InjectRepository(TipocredencialOrmEntity)
    private readonly repo: Repository<TipocredencialOrmEntity>,
  ) {}

  private toDomain(orm: TipocredencialOrmEntity): Tipocredencial {
    return new Tipocredencial(
      orm.id_tipocredencial,
      orm.plataforma,
      orm.nombre,
      orm.roles,
      orm.descripcion,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Tipocredencial): Promise<Tipocredencial> {
    const orm = this.repo.create({
      plataforma: entity.plataforma,
      nombre: entity.nombre,
      roles: entity.roles,
      descripcion: entity.descripcion,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Tipocredencial[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Tipocredencial | null> {
    const orm = await this.repo.findOneBy({ id_tipocredencial: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Tipocredencial>): Promise<Tipocredencial> {
    await this.repo.update(id, {
      ...(data.plataforma && { plataforma: data.plataforma }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.roles && { roles: data.roles }),
      ...(data.descripcion !== undefined && { descripcion: data.descripcion }),
    });
    const orm = await this.repo.findOneBy({ id_tipocredencial: id });
    if (!orm) throw new Error(`Tipo de credencial con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
