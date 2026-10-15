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

  async crear(entity: Credenciales): Promise<Credenciales> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }

  async obtenerTodos(): Promise<Credenciales[]> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }

  async obtenerPorId(id: string): Promise<Credenciales | null> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }

  async actualizar(id: string, data: Partial<Credenciales>): Promise<Credenciales> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }

  async eliminar(id: string): Promise<void> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }
}
