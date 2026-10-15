import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaEpRepository } from '../../../domain/ports/CategoriaEp.repository';
import { CategoriaEp } from '../../../domain/entities/CategoriaEp.entity';
import { CategoriaEpOrmEntity } from '../../entities/CategoriaEp.orm-entity';

@Injectable()
export class CategoriaEpTypeOrmRepository implements CategoriaEpRepository {
  constructor(
    @InjectRepository(CategoriaEpOrmEntity)
    private readonly repo: Repository<CategoriaEpOrmEntity>,
  ) {}

  private toDomain(orm: CategoriaEpOrmEntity): CategoriaEp {
    return new CategoriaEp(orm.id_categoriaep, orm.nombre, orm.nombre_sofia, orm.created_at, orm.updated_at);
  }

  async crear(entity: CategoriaEp): Promise<CategoriaEp> {
    const orm = this.repo.create({
      nombre: entity.nombre,
      nombre_sofia: entity.nombre_sofia,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<CategoriaEp[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<CategoriaEp | null> {
    const orm = await this.repo.findOneBy({ id_categoriaep: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<CategoriaEp>): Promise<CategoriaEp> {
    await this.repo.update(id, {
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.nombre_sofia && { nombre_sofia: data.nombre_sofia }),
    });
    const orm = await this.repo.findOneBy({ id_categoriaep: id });
    if (!orm) throw new Error(`Categoria de etapa productiva con id ${id} no encontrada`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
