import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeleccionEpRepository } from '../../../domain/ports/SeleccionEp.repository';
import { SeleccionEp } from '../../../domain/entities/SeleccionEp.entity';
import { SeleccionEpOrmEntity } from '../../entities/SeleccionEp.orm-entity';

@Injectable()
export class SeleccionEpTypeOrmRepository implements SeleccionEpRepository {
  constructor(
    @InjectRepository(SeleccionEpOrmEntity)
    private readonly repo: Repository<SeleccionEpOrmEntity>,
  ) {}

  private toDomain(orm: SeleccionEpOrmEntity): SeleccionEp {
    return new SeleccionEp(
      orm.id_seleccionep,
      orm.matricula_id_FK,
      orm.alternativa_id_FK,
      orm.alternativa_original_id_FK,
      orm.estado_proceso,
      orm.fecha_respuesta,
      orm.verificacion_ficha,
      orm.resultado_verificacion_sgva,
      orm.fecha_verificacion,
      orm.ruta_formato,
      orm.fecha_revision,
      orm.fecha_migracion_sgva,
      orm.observaciones,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: SeleccionEp): Promise<SeleccionEp> {
    const orm = this.repo.create({
      matricula_id_FK: entity.matricula_id_FK,
      alternativa_id_FK: entity.alternativa_id_FK,
      alternativa_original_id_FK: entity.alternativa_original_id_FK,
      estado_proceso: entity.estado_proceso,
      fecha_respuesta: entity.fecha_respuesta,
      verificacion_ficha: entity.verificacion_ficha,
      resultado_verificacion_sgva: entity.resultado_verificacion_sgva,
      fecha_verificacion: entity.fecha_verificacion,
      ruta_formato: entity.ruta_formato,
      fecha_revision: entity.fecha_revision,
      fecha_migracion_sgva: entity.fecha_migracion_sgva,
      observaciones: entity.observaciones,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<SeleccionEp[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<SeleccionEp | null> {
    const orm = await this.repo.findOneBy({ id_seleccionep: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<SeleccionEp>): Promise<SeleccionEp> {
    await this.repo.update(id, {
      ...(data.estado_proceso && { estado_proceso: data.estado_proceso }),
      ...(data.alternativa_original_id_FK !== undefined && { alternativa_original_id_FK: data.alternativa_original_id_FK }),
      ...(data.fecha_respuesta && { fecha_respuesta: data.fecha_respuesta }),
      ...(data.verificacion_ficha && { verificacion_ficha: data.verificacion_ficha }),
      ...(data.resultado_verificacion_sgva && { resultado_verificacion_sgva: data.resultado_verificacion_sgva }),
      ...(data.fecha_verificacion && { fecha_verificacion: data.fecha_verificacion }),
      ...(data.ruta_formato && { ruta_formato: data.ruta_formato }),
      ...(data.fecha_revision && { fecha_revision: data.fecha_revision }),
      ...(data.fecha_migracion_sgva && { fecha_migracion_sgva: data.fecha_migracion_sgva }),
      ...(data.observaciones && { observaciones: data.observaciones }),
    });
    const orm = await this.repo.findOneBy({ id_seleccionep: id });
    if (!orm) throw new Error(`SeleccionEp con id ${id} no encontrada`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
