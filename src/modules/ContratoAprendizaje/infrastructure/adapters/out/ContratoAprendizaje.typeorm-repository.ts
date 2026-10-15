import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContratoAprendizajeRepository } from '../../../domain/ports/ContratoAprendizaje.repository';
import { ContratoAprendizaje } from '../../../domain/entities/ContratoAprendizaje.entity';
import { ContratoAprendizajeOrmEntity } from '../../entities/ContratoAprendizaje.orm-entity';

@Injectable()
export class ContratoAprendizajeTypeOrmRepository implements ContratoAprendizajeRepository {
  constructor(
    @InjectRepository(ContratoAprendizajeOrmEntity)
    private readonly repo: Repository<ContratoAprendizajeOrmEntity>,
  ) {}

  private toDomain(orm: ContratoAprendizajeOrmEntity): ContratoAprendizaje {
    return new ContratoAprendizaje(
      orm.id_contratoaprendizaje,
      orm.etapa_productiva_id_FK,
      orm.empresa_id_FK,
      orm.numero_contrato,
      orm.fecha_inicio,
      orm.fecha_fin,
      orm.estado,
      orm.nit_eps,
      orm.nombre_eps,
      orm.nit_arl,
      orm.nombre_arl,
      orm.contrato_cedido_a,
      orm.fecha_registro_sgva,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: ContratoAprendizaje): Promise<ContratoAprendizaje> {
    const orm = this.repo.create({
      etapa_productiva_id_FK: entity.etapa_productiva_id_FK,
      empresa_id_FK: entity.empresa_id_FK,
      numero_contrato: entity.numero_contrato,
      fecha_inicio: entity.fecha_inicio,
      fecha_fin: entity.fecha_fin,
      estado: entity.estado,
      nit_eps: entity.nit_eps,
      nombre_eps: entity.nombre_eps,
      nit_arl: entity.nit_arl,
      nombre_arl: entity.nombre_arl,
      contrato_cedido_a: entity.contrato_cedido_a,
      fecha_registro_sgva: entity.fecha_registro_sgva,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<ContratoAprendizaje[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<ContratoAprendizaje | null> {
    const orm = await this.repo.findOneBy({ id_contratoaprendizaje: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<ContratoAprendizaje>): Promise<ContratoAprendizaje> {
    await this.repo.update(id, {
      ...(data.numero_contrato && { numero_contrato: data.numero_contrato }),
      ...(data.fecha_inicio && { fecha_inicio: data.fecha_inicio }),
      ...(data.fecha_fin && { fecha_fin: data.fecha_fin }),
      ...(data.estado && { estado: data.estado }),
      ...(data.nit_eps && { nit_eps: data.nit_eps }),
      ...(data.nombre_eps && { nombre_eps: data.nombre_eps }),
      ...(data.nit_arl && { nit_arl: data.nit_arl }),
      ...(data.nombre_arl && { nombre_arl: data.nombre_arl }),
      ...(data.contrato_cedido_a && { contrato_cedido_a: data.contrato_cedido_a }),
      ...(data.fecha_registro_sgva && { fecha_registro_sgva: data.fecha_registro_sgva }),
    });
    const orm = await this.repo.findOneBy({ id_contratoaprendizaje: id });
    if (!orm) throw new Error(`Contrato de aprendizaje con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
