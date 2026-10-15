import { Inject, Injectable } from '@nestjs/common';
import type { NovedadRepository } from '../../domain/ports/Novedad.repository';

@Injectable()
export class eliminarNovedadUseCase {
  constructor(
    @Inject('NovedadRepository')
    private readonly repo: NovedadRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
