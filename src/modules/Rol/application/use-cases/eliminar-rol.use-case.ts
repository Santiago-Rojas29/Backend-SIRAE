import { Inject, Injectable } from '@nestjs/common';
import type { RolRepository } from '../../domain/ports/Rol.repository';

@Injectable()
export class eliminarRolUseCase {
  constructor(
    @Inject('RolRepository')
    private readonly repo: RolRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
