import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioRepository } from '../../../domain/ports/Usuario.repository';
import { Usuario } from '../../../domain/entities/Usuario.entity';
import { UsuarioOrmEntity } from '../../entities/Usuario.orm-entity';

@Injectable()
export class UsuarioTypeOrmRepository implements UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioOrmEntity)
    private readonly repo: Repository<UsuarioOrmEntity>,
  ) {}

  private toEntity(data:UsuarioOrmEntity): Usuario{
    return new Usuario(
      data.id_usuario,
      data.centro_id_FK,
      data.nombre,
      data.correo,
      data.password,
      data.tipo_usuario,
      data.estado_usuario,
      data.numero_documento,
      data.tipo_documento,
      data.created_at,
      data.updated_at

    )
  }

  async crear(entity: Usuario): Promise<Usuario> {
    const orm= this.repo.create({
      centro_id_FK: entity.centro_id_FK,
      nombre: entity.nombre,
      correo:entity.correo,
      password:entity.password,
      tipo_usuario:entity.tipo_usuario,
      estado_usuario:entity.estado_usuario,
      numero_documento:entity.numero_documento,
      tipo_documento:entity.tipo_documento,
    })
    await this.repo.save(orm)
    return entity

  }

  async obtenerTodos(): Promise<Usuario[]> {
    const data=await this.repo.find()
    return data.map(usu=> new Usuario(usu.id_usuario,usu.centro_id_FK,usu.nombre,usu.correo,usu.password,usu.tipo_usuario, usu.estado_usuario,usu.numero_documento,usu.tipo_documento,usu.created_at,usu.updated_at))

    
    
  }

  async obtenerPorId(id: string): Promise<Usuario | null> {
    const usu=await this.repo.findOneBy({id_usuario:id});
    return usu ? this.toEntity(usu): null

  }

  async obtenerPorCorreo(correo: string): Promise<Usuario | null> {
    const usu = await this.repo.findOneBy({ correo });
    return usu ? this.toEntity(usu) : null;
  }

  async actualizar(id: string, data: Partial<Usuario>): Promise<Usuario> {
    await this.repo.update(id,data as any);
    const usu= await this.repo.findOneBy({id_usuario:id});
    if(!usu) throw new Error(`El usuario con ${id} no existe`)
    return this.toEntity(usu)
  }

  async eliminar(id: string): Promise<void> {
    await this.repo.delete(id)

  
  }
}
