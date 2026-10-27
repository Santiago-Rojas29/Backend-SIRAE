import { Inject, Injectable } from '@nestjs/common';
import type{ CentroRepository } from '../../domain/ports/Centro.repository';
import { Centro } from '../../domain/entities/Centro.entity';

@Injectable()
export class CrearCentroUseCase {
  constructor(
    @Inject('CentroRepository')
    private readonly repo: CentroRepository,
  ) {}

  async execute(data: {regional_id_FK:string,nombre: string; codigo: string; direccion:string; municipio:string;departamento:string;telefono:string;correo:string }): Promise<Centro> {
    const entity = new Centro('',data.regional_id_FK, data.nombre, data.codigo, data.direccion, data.municipio, data.departamento, data.telefono, data.correo);
    entity.validar();
    return this.repo.crear(entity);
  }
}
