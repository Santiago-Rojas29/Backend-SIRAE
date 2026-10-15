import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatriculaRepository } from '../../../domain/ports/Matricula.repository';
import { Matricula } from '../../../domain/entities/Matricula.entity';
import { MatriculaOrmEntity } from '../../entities/Matricula.orm-entity';

@Injectable()
export class MatriculaTypeOrmRepository implements MatriculaRepository {
  constructor(
    @InjectRepository(MatriculaOrmEntity)
    private readonly repo: Repository<MatriculaOrmEntity>,
  ) {}

  private toDomain(orm: MatriculaOrmEntity): Matricula {
    return new Matricula(
      orm.id_matricula,
      orm.aprendiz_id_FK,
      orm.ficha_id_FK,
      orm.estado,
      orm.fecha_inicio,
      orm.estado_sgva,
      orm.cantidad_contratos_sgva,
      orm.fecha_actualizacion_sgva,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Matricula): Promise<Matricula> {
    const orm = this.repo.create({
      aprendiz_id_FK: entity.aprendiz_id_FK,
      ficha_id_FK: entity.ficha_id_FK,
      estado: entity.estado,
      fecha_inicio: entity.fecha_inicio,
      estado_sgva: entity.estado_sgva,
      cantidad_contratos_sgva: entity.cantidad_contratos_sgva,
      fecha_actualizacion_sgva: entity.fecha_actualizacion_sgva,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Matricula[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Matricula | null> {
    const orm = await this.repo.findOneBy({ id_matricula: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Matricula>): Promise<Matricula> {
    await this.repo.update(id, {
      ...(data.estado && { estado: data.estado }),
      ...(data.fecha_inicio && { fecha_inicio: data.fecha_inicio }),
      ...(data.estado_sgva !== undefined && { estado_sgva: data.estado_sgva }),
      ...(data.cantidad_contratos_sgva !== undefined && { cantidad_contratos_sgva: data.cantidad_contratos_sgva }),
      ...(data.fecha_actualizacion_sgva !== undefined && { fecha_actualizacion_sgva: data.fecha_actualizacion_sgva }),
    });
    const orm = await this.repo.findOneBy({ id_matricula: id });
    if (!orm) throw new Error(`Matricula con id ${id} no encontrada`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
