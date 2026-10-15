import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResolucionRepository } from '../../../domain/ports/Resolucion.repository';
import { Resolucion } from '../../../domain/entities/Resolucion.entity';
import { ResolucionOrmEntity } from '../../entities/Resolucion.orm-entity';

@Injectable()
export class ResolucionTypeOrmRepository implements ResolucionRepository {
  constructor(
    @InjectRepository(ResolucionOrmEntity)
    private readonly repo: Repository<ResolucionOrmEntity>,
  ) {}

  private toDomain(orm: ResolucionOrmEntity): Resolucion {
    return new Resolucion(
      orm.id_resolucion,
      orm.numero,
      orm.anio,
      orm.fecha,
      orm.tipo,
      orm.observaciones,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Resolucion): Promise<Resolucion> {
    const orm = this.repo.create({
      numero: entity.numero,
      anio: entity.anio,
      fecha: entity.fecha,
      tipo: entity.tipo,
      observaciones: entity.observaciones,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Resolucion[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Resolucion | null> {
    const orm = await this.repo.findOneBy({ id_resolucion: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Resolucion>): Promise<Resolucion> {
    await this.repo.update(id, {
      ...(data.numero && { numero: data.numero }),
      ...(data.anio !== undefined && { anio: data.anio }),
      ...(data.fecha && { fecha: data.fecha }),
      ...(data.tipo && { tipo: data.tipo }),
      ...(data.observaciones && { observaciones: data.observaciones }),
    });
    const orm = await this.repo.findOneBy({ id_resolucion: id });
    if (!orm) throw new Error(`Resolucion con id ${id} no encontrada`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
