import { Inject, Injectable } from '@nestjs/common';
import type{ EmpresaRepository } from '../../domain/ports/Empresa.repository';
import { Empresa } from '../../domain/entities/Empresa.entity';

@Injectable()
export class crearEmpresaUseCase {
  constructor(
    @Inject('EmpresaRepository')
    private readonly repo: EmpresaRepository,
  ) {}

  async execute(data: { nit: string; razon_social: string; direccion:string; telefono:string; correo: string; ciudad:string; departamento: string }): Promise<Empresa> {
    const entity = new Empresa('',data.nit, data.razon_social,data.direccion,data.telefono,data.correo,data.ciudad,data.departamento);
    return this.repo.crear(entity);
  }
}
