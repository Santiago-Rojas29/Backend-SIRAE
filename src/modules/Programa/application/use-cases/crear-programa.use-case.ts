import { Inject, Injectable } from '@nestjs/common';
import type { ProgramaRepository } from '../../domain/ports/Programa.repository';
import { Programa } from '../../domain/entities/Programa.entity';

@Injectable()
export class CrearProgramaUseCase {
  constructor(
    @Inject('ProgramaRepository')
    private readonly repo: ProgramaRepository,
  ) {}

  async execute(data: {
    codigo: string;
    version: string;
    nombre: string;
    nivel_formacion: string;
  }): Promise<Programa> {
    const entity = new Programa('', data.codigo, data.version, data.nombre, data.nivel_formacion);
    entity.validar();
    return this.repo.crear(entity);
  }
}
