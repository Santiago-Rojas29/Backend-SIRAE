import { Inject, Injectable } from '@nestjs/common';
import type { RolRepository } from '../../domain/ports/Rol.repository';
import { Rol } from '../../domain/entities/Rol.entity';

@Injectable()
export class CrearRolUseCase {
  constructor(
    @Inject('RolRepository')
    private readonly repo: RolRepository,
  ) {}

  async execute(data: { nombre: string; descripcion: string }): Promise<Rol> {
    const entity = new Rol('', data.nombre, data.descripcion);
    entity.validar();
    return this.repo.crear(entity);
  }
}
