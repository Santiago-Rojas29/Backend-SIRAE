import { Inject, Injectable } from '@nestjs/common';
import type { RolRepository } from '../../domain/ports/Rol.repository';
import { Rol } from '../../domain/entities/Rol.entity';

@Injectable()
export class obtenerPorIdRolUseCase {
  constructor(
    @Inject('RolRepository')
    private readonly repo: RolRepository,
  ) {}

  async execute(id: string): Promise<Rol | null> {
    return this.repo.obtenerPorId(id);
  }
}
