import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlternativaepRepository } from '../../../domain/ports/Alternativaep.repository';
import { Alternativaep } from '../../../domain/entities/Alternativaep.entity';
import { AlternativaepOrmEntity } from '../../entities/Alternativaep.orm-entity';

@Injectable()
export class AlternativaepTypeOrmRepository implements AlternativaepRepository {
  constructor(
    @InjectRepository(AlternativaepOrmEntity)
    private readonly repo: Repository<AlternativaepOrmEntity>,
  ) {}

  private toDomain(orm:AlternativaepOrmEntity):Alternativaep{
    return new Alternativaep(
      orm.id_alternativaep,
      orm.categoria_ep_id_FK,
      orm.nombre,
      orm.texto_sofia,
      orm.created_at,
      orm.updated_at
    )
  }

  async crear(entity: Alternativaep): Promise<Alternativaep> {
    const orm=this.repo.create({
      categoria_ep_id_FK:entity.categoria_ep_id_FK,
      nombre: entity.nombre,
      texto_sofia:entity.nombre
    });

    const guardado= await this.repo.save(orm);
    return this.toDomain(guardado)
  }

  async obtenerTodos(): Promise<Alternativaep[]> {
    const data= await this.repo.find()
    return data.map((orm)=>this.toDomain(orm))
  }

  async obtenerPorId(id: string): Promise<Alternativaep | null> {
    const orm=await this.repo.findOneBy({id_alternativaep:id})
    return orm? this.toDomain(orm) : null;
  }

  async actualizar(id: string, data: Partial<Alternativaep>): Promise<Alternativaep> {
  await this.repo.update(id,{
    ...(data.nombre &&{nombre:data.nombre}),
    ...(data.texto_sofia &&{texto_sofia:data.texto_sofia})
  })
  const orm= await this.repo.findOneBy({id_alternativaep:id})
  if(!orm) throw new Error(`Alternativa de Etapa Productiva con id ${id} no encontrado`)
    return this.toDomain(orm)
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
