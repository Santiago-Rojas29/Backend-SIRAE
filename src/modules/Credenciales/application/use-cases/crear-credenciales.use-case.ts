import { Inject, Injectable } from '@nestjs/common';
import { CredencialesRepository } from '../../domain/ports/Credenciales.repository';
import { Credenciales } from '../../domain/entities/Credenciales.entity';

@Injectable()
export class CrearCredencialesUseCase {
  constructor(
    @Inject('CredencialesRepository')
    private readonly repo: CredencialesRepository,
  ) {}

  async execute(data: { nombre: string; codigo: string }): Promise<Credenciales> {
    const entity = new Credenciales(data.nombre, data.codigo);
    return this.repo.crear(entity);
  }
}
