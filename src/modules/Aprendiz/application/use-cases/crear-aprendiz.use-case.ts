import { Inject, Injectable } from '@nestjs/common';
import type { AprendizRepository } from '../../domain/ports/Aprendiz.repository';
import { Aprendiz, TipoDocumento, Genero } from '../../domain/entities/Aprendiz.entity';

@Injectable()
export class CrearAprendizUseCase {
  constructor(
    @Inject('AprendizRepository')
    private readonly repo: AprendizRepository,
  ) {}

  async execute(data: {
    tipo_documento: TipoDocumento;
    numero_documento: string;
    nombre: string;
    apellidos: string;
    fecha_nacimiento?: Date;
    genero?: Genero;
    estrato?: string;
    celular?: string;
    correo?: string;
    direccion?: string;
    municipio?: string;
    discapacidad?: string;
  }): Promise<Aprendiz> {
    const entity = new Aprendiz(
      '',
      data.tipo_documento,
      data.numero_documento,
      data.nombre,
      data.apellidos,
      data.fecha_nacimiento,
      data.genero,
      data.estrato,
      data.celular,
      data.correo,
      data.direccion,
      data.municipio,
      data.discapacidad,
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
