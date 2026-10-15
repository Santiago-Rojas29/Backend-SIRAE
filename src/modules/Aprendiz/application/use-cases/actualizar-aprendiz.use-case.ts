import { Inject, Injectable } from '@nestjs/common';
import type { AprendizRepository } from '../../domain/ports/Aprendiz.repository';
import { Aprendiz, TipoDocumento, Genero } from '../../domain/entities/Aprendiz.entity';

@Injectable()
export class actualizarAprendizUseCase {
  constructor(
    @Inject('AprendizRepository')
    private readonly repo: AprendizRepository,
  ) {}

  async execute(
    id: string,
    data: {
      tipo_documento?: TipoDocumento;
      numero_documento?: string;
      nombre?: string;
      apellidos?: string;
      fecha_nacimiento?: Date;
      genero?: Genero;
      estrato?: string;
      celular?: string;
      correo?: string;
      direccion?: string;
      municipio?: string;
      discapacidad?: string;
    },
  ): Promise<Aprendiz> {
    const mapped: Partial<Aprendiz> = {
      ...(data.tipo_documento && { tipo_documento: data.tipo_documento }),
      ...(data.numero_documento && { numero_documento: data.numero_documento }),
      ...(data.nombre && { nombre: data.nombre }),
      ...(data.apellidos && { apellidos: data.apellidos }),
      ...(data.fecha_nacimiento && { fecha_nacimiento: data.fecha_nacimiento }),
      ...(data.genero && { genero: data.genero }),
      ...(data.estrato && { estrato: data.estrato }),
      ...(data.celular && { celular: data.celular }),
      ...(data.correo && { correo: data.correo }),
      ...(data.direccion && { direccion: data.direccion }),
      ...(data.municipio && { municipio: data.municipio }),
      ...(data.discapacidad && { discapacidad: data.discapacidad }),
    };
    return this.repo.actualizar(id, mapped);
  }
}
