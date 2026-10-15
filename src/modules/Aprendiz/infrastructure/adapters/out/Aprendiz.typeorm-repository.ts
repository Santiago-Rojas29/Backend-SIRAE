import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AprendizRepository } from '../../../domain/ports/Aprendiz.repository';
import { Aprendiz } from '../../../domain/entities/Aprendiz.entity';
import { AprendizOrmEntity } from '../../entities/Aprendiz.orm-entity';

@Injectable()
export class AprendizTypeOrmRepository implements AprendizRepository {
  constructor(
    @InjectRepository(AprendizOrmEntity)
    private readonly repo: Repository<AprendizOrmEntity>,
  ) {}

  private toDomain(orm: AprendizOrmEntity): Aprendiz {
    return new Aprendiz(
      orm.id_aprendiz,
      orm.tipo_documento,
      orm.numero_documento,
      orm.nombre,
      orm.apellidos,
      orm.fecha_nacimiento,
      orm.genero,
      orm.estrato,
      orm.celular,
      orm.correo,
      orm.direccion,
      orm.municipio,
      orm.discapacidad,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Aprendiz): Promise<Aprendiz> {
    const orm = this.repo.create({
      tipo_documento: entity.tipo_documento,
      numero_documento: entity.numero_documento,
      nombre: entity.nombre,
      apellidos: entity.apellidos,
      fecha_nacimiento: entity.fecha_nacimiento,
      genero: entity.genero,
      estrato: entity.estrato,
      celular: entity.celular,
      correo: entity.correo,
      direccion: entity.direccion,
      municipio: entity.municipio,
      discapacidad: entity.discapacidad,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Aprendiz[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Aprendiz | null> {
    const orm = await this.repo.findOneBy({ id_aprendiz: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Aprendiz>): Promise<Aprendiz> {
    await this.repo.update(id, {
      ...(data.tipo_documento && { tipo_documento: data.tipo_documento }),
      ...(data.numero_documento && { numero_documento: data.numero_documento }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.apellidos && { apellidos: data.apellidos }),
      ...(data.fecha_nacimiento && { fecha_nacimiento: data.fecha_nacimiento }),
      ...(data.genero && { genero: data.genero }),
      ...(data.estrato && { estrato: data.estrato }),
      ...(data.celular && { celular: data.celular }),
      ...(data.correo && { correo: data.correo }),
      ...(data.direccion && { direccion: data.direccion }),
      ...(data.municipio && { municipio: data.municipio }),
      ...(data.discapacidad && { discapacidad: data.discapacidad }),
    });
    const orm = await this.repo.findOneBy({ id_aprendiz: id });
    if (!orm) throw new Error(`Aprendiz con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
