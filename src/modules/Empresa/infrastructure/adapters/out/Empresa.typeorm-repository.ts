import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../../../domain/entities/Empresa.entity';
import { EmpresaOrmEntity } from '../../entities/Empresa.orm-entity';
import type{ EmpresaRepository } from 'src/modules/Empresa/domain/ports/Empresa.repository';

@Injectable()
export class EmpresaTypeOrmRepository implements EmpresaRepository {
  constructor(
    @InjectRepository(EmpresaOrmEntity)
    private readonly repo: Repository<EmpresaOrmEntity>,
  ) {}

  private toDomain(orm:EmpresaOrmEntity):Empresa{
    return new Empresa(
      orm.id_empresa,
      orm.nit,
      orm.razon_social,
      orm.direccion,
      orm.telefono,
      orm.correo,
      orm.ciudad,
      orm.departamento,
      orm.created_at,
      orm.updated_at
    )
  }

  async crear(entity: Empresa): Promise<Empresa> {
    const orm= this.repo.create({
      nit:entity.nit,
      razon_social:entity.razon_social,
      direccion:entity.direccion,
      telefono:entity.telefono,
      correo:entity.correo,
      ciudad:entity.ciudad,
      departamento:entity.departamento}
    )
    const guardado=await this.repo.save(orm)
    return this.toDomain(guardado)


  
  }

  async obtenerTodos(): Promise<Empresa[]> {
    const data= await this.repo.find();
    return data.map(orm=>this.toDomain(orm))
  }

  async obtenerPorId(id: string): Promise<Empresa | null> {
    const orm=await this.repo.findOneBy({id_empresa:id})
    return orm? this.toDomain(orm) : null
  }

  async actualizar(id: string, data: Partial<Empresa>): Promise<Empresa> {
  await this.repo.update(id,{
    ...(data.nit &&{nit:data.nit}),
    ...(data.razon_social &&{razon_social:data.razon_social}),
    ...(data.direccion &&{direccion:data.direccion}),
    ...(data.telefono &&{telefono:data.telefono}),
    ...(data.correo &&{correo:data.correo}),
    ...(data.ciudad &&{ciudad:data.ciudad}),
    ...(data.departamento &&{departamento:data.departamento})
  });
  const orm=await this.repo.findOneBy({id_empresa:id})
  if(!orm ) throw new Error(`Empresa con id ${id} no existe` )
  return this.toDomain(orm)
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id)
  }
}
