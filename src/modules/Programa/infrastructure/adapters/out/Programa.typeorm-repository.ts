import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProgramaRepository } from '../../../domain/ports/Programa.repository';
import { Programa } from '../../../domain/entities/Programa.entity';
import { ProgramaOrmEntity } from '../../entities/Programa.orm-entity';

@Injectable()
export class ProgramaTypeOrmRepository implements ProgramaRepository {
  constructor(
    @InjectRepository(ProgramaOrmEntity)
    private readonly repo: Repository<ProgramaOrmEntity>,
  ) {}

  private toDomain(orm: ProgramaOrmEntity): Programa {
    return new Programa(
      orm.id_programa,
      orm.codigo,
      orm.version,
      orm.nombre,
      orm.nivel_formacion,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Programa): Promise<Programa> {
    const orm = this.repo.create({
      codigo: entity.codigo,
      version: entity.version,
      nombre: entity.nombre,
      nivel_formacion: entity.nivel_formacion,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Programa[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Programa | null> {
    const orm = await this.repo.findOneBy({ id_programa: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Programa>): Promise<Programa> {
    await this.repo.update(id, {
      ...(data.codigo && { codigo: data.codigo }),
      ...(data.version && { version: data.version }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.nivel_formacion && { nivel_formacion: data.nivel_formacion }),
    });
    const orm = await this.repo.findOneBy({ id_programa: id });
    if (!orm) throw new Error(`Programa con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
