import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CredencialesRepository } from '../../../domain/ports/Credenciales.repository';
import { Credenciales } from '../../../domain/entities/Credenciales.entity';
import { CredencialesOrmEntity } from '../../entities/Credenciales.orm-entity';

@Injectable()
export class CredencialesTypeOrmRepository implements CredencialesRepository {
  constructor(
    @InjectRepository(CredencialesOrmEntity)
    private readonly repo: Repository<CredencialesOrmEntity>,
  ) {}

  private toDomain(orm: CredencialesOrmEntity): Credenciales {
    return new Credenciales(
      orm.id_credenciales,
      orm.centro_id_FK,
      orm.tipo_credenciales_id_FK,
      orm.datos_encryptados,
      orm.iv,
      orm.auth_tag,
      orm.estado,
      orm.observacion_verificacion,
      orm.fecha_verificación,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: Credenciales): Promise<Credenciales> {
    const existente = await this.repo.findOneBy({
      centro_id_FK: entity.centro_id_FK,
      tipo_credenciales_id_FK: entity.tipo_credenciales_id_FK,
    });

    if (existente) {
      existente.datos_encryptados = entity.datos_encryptados;
      existente.iv = entity.iv;
      existente.auth_tag = entity.auth_tag;
      existente.estado = entity.estado;
      existente.observacion_verificacion = entity.observacion_verificacion;
      existente.fecha_verificación = entity.fecha_verificación;
      const actualizado = await this.repo.save(existente);
      return this.toDomain(actualizado);
    }

    const orm = this.repo.create({
      centro_id_FK: entity.centro_id_FK,
      tipo_credenciales_id_FK: entity.tipo_credenciales_id_FK,
      datos_encryptados: entity.datos_encryptados,
      iv: entity.iv,
      auth_tag: entity.auth_tag,
      estado: entity.estado,
      observacion_verificacion: entity.observacion_verificacion,
      fecha_verificación: entity.fecha_verificación,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<Credenciales[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<Credenciales | null> {
    const orm = await this.repo.findOneBy({ id_credenciales: id });
    return orm ? this.toDomain(orm) : null;
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
