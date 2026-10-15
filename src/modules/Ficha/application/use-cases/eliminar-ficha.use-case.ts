import { Inject, Injectable } from '@nestjs/common';
import type { FichaRepository } from '../../domain/ports/Ficha.repository';

@Injectable()
export class eliminarFichaUseCase {
  constructor(
    @Inject('FichaRepository')
    private readonly repo: FichaRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.repo.eliminar(id);
  }
}
