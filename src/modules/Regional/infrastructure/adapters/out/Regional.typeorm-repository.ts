import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegionalRepository } from '../../../domain/ports/Regional.repository';
import { Regional } from '../../../domain/entities/Regional.entity';
import { RegionalOrmEntity } from '../../entities/Regional.orm-entity';

@Injectable()
export class RegionalTypeOrmRepository implements RegionalRepository {
  constructor(@InjectRepository(RegionalOrmEntity) private readonly repo: Repository<RegionalOrmEntity>) {}

  private toEntity(data:RegionalOrmEntity): Regional{
    return new Regional(
      data.id_regional,
      data.codigo,
      data.nombre,
      data.created_at,
      data.updated_at
    )
  }
  
  async crear(entity: Regional): Promise<Regional> {
    const orm = this.repo.create({
      nombre: entity.nombre,
      codigo: entity.codigo
    });
    await this.repo.save(orm);
    return entity;
  }

  async obtenerTodos(): Promise<Regional[]> {
    const data = await this.repo.find();
    return data.map(reg=>new Regional(reg.id_regional,reg.nombre, reg.codigo, reg.created_at, reg.updated_at));
  }

  async obtenerPorId(id: string): Promise<Regional | null> {
    const data= await this.repo.findOneBy({id_regional: id});
    return data ? this.toEntity(data): null;

  }

  async actualizar(id: string, data: Partial<Regional>): Promise<Regional> {
    await this.repo.update(id,data as any);
    const reg= await this.repo.findOneBy({id_regional: id});
    if(!reg) throw new Error(`La regional con ${id} no existe`)
    return this.toEntity(reg);
  }

  async eliminar(id:string): Promise<void>{
    await this.repo.delete(id);
  }
}

