import { Inject, Injectable } from '@nestjs/common';
import type { SeleccionEpRepository } from '../../domain/ports/SeleccionEp.repository';
import { SeleccionEp } from '../../domain/entities/SeleccionEp.entity';

@Injectable()
export class ObtenerTodosSeleccionEpUseCase {
  constructor(
    @Inject('SeleccionEpRepository')
    private readonly repo: SeleccionEpRepository,
  ) {}

  async execute(): Promise<SeleccionEp[]> {
    return this.repo.obtenerTodos();
  }
}
