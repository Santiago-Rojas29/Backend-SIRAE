import { Inject, Injectable } from '@nestjs/common';
import type { ProgramaRepository } from '../../domain/ports/Programa.repository';
import { Programa } from '../../domain/entities/Programa.entity';

@Injectable()
export class actualizarProgramaUseCase {
  constructor(
    @Inject('ProgramaRepository')
    private readonly repo: ProgramaRepository,
  ) {}

  async execute(
    id: string,
    data: {
      codigo?: string;
      version?: string;
      nombre?: string;
      nivel_formacion?: string;
    },
  ): Promise<Programa> {
    const mapped: Partial<Programa> = {
      ...(data.codigo && { codigo: data.codigo }),
      ...(data.version && { version: data.version }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.nivel_formacion && { nivel_formacion: data.nivel_formacion }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
