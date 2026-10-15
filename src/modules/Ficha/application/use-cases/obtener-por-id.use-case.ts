import { Inject, Injectable } from '@nestjs/common';
import type { FichaRepository } from '../../domain/ports/Ficha.repository';
import { Ficha } from '../../domain/entities/Ficha.entity';

@Injectable()
export class obtenerPorIdFichaUseCase {
  constructor(
    @Inject('FichaRepository')
    private readonly repo: FichaRepository,
  ) {}

  async execute(id: string): Promise<Ficha | null> {
    return this.repo.obtenerPorId(id);
  }
}
