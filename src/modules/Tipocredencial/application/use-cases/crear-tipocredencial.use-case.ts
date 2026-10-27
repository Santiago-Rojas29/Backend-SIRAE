import { Inject, Injectable } from '@nestjs/common';
import type{ TipocredencialRepository } from '../../domain/ports/Tipocredencial.repository';
import { Tipocredencial, TipoPlataforma } from '../../domain/entities/Tipocredencial.entity';

@Injectable()
export class CrearTipocredencialUseCase {
  constructor(
    @Inject('TipocredencialRepository')
    private readonly repo: TipocredencialRepository,
  ) {}

  async execute(data: { plataforma: TipoPlataforma; nombre: string; roles: string; descripcion?: string }): Promise<Tipocredencial> {
    const entity = new Tipocredencial('', data.plataforma, data.nombre, data.roles, data.descripcion);
    entity.validar();
    return this.repo.crear(entity);
  }
}
