import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArchivoProcesadoRepository } from '../../../domain/ports/ArchivoProcesado.repository';
import { ArchivoProcesado } from '../../../domain/entities/ArchivoProcesado.entity';
import { ArchivoProcesadoOrmEntity } from '../../entities/ArchivoProcesado.orm-entity';

@Injectable()
export class ArchivoProcesadoTypeOrmRepository implements ArchivoProcesadoRepository {
  constructor(
    @InjectRepository(ArchivoProcesadoOrmEntity)
    private readonly repo: Repository<ArchivoProcesadoOrmEntity>,
  ) {}

  private toDomain(orm: ArchivoProcesadoOrmEntity): ArchivoProcesado {
    return new ArchivoProcesado(
      orm.id_archivoprocesado,
      orm.job_ejecution_id_FK,
      orm.nombre_archivo,
      orm.ruta,
      orm.tipo,
      orm.tipo_reporte,
      orm.hash_archivo,
      orm.tamanio,
      orm.fecha_procesamiento,
      orm.created_at,
      orm.updated_at,
    );
  }

  async crear(entity: ArchivoProcesado): Promise<ArchivoProcesado> {
    const orm = this.repo.create({
      job_ejecution_id_FK: entity.job_ejecution_id_FK,
      nombre_archivo: entity.nombre_archivo,
      ruta: entity.ruta,
      tipo: entity.tipo,
      tipo_reporte: entity.tipo_reporte,
      hash_archivo: entity.hash_archivo,
      tamanio: entity.tamanio,
      fecha_procesamiento: entity.fecha_procesamiento,
    });
    const guardado = await this.repo.save(orm);
    return this.toDomain(guardado);
  }

  async obtenerTodos(): Promise<ArchivoProcesado[]> {
    const data = await this.repo.find();
    return data.map((orm) => this.toDomain(orm));
  }

  async obtenerPorId(id: string): Promise<ArchivoProcesado | null> {
    const orm = await this.repo.findOneBy({ id_archivoprocesado: id });
    return orm ? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<ArchivoProcesado>): Promise<ArchivoProcesado> {
    await this.repo.update(id, {
      ...(data.nombre_archivo && { nombre_archivo: data.nombre_archivo }),
      ...(data.ruta && { ruta: data.ruta }),
      ...(data.tipo && { tipo: data.tipo }),
      ...(data.tipo_reporte !== undefined && { tipo_reporte: data.tipo_reporte }),
      ...(data.hash_archivo && { hash_archivo: data.hash_archivo }),
      ...(data.tamanio && { tamanio: data.tamanio }),
      ...(data.fecha_procesamiento && { fecha_procesamiento: data.fecha_procesamiento }),
    });
    const orm = await this.repo.findOneBy({ id_archivoprocesado: id });
    if (!orm) throw new Error(`ArchivoProcesado con id ${id} no encontrado`);
    return this.toDomain(orm);
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
