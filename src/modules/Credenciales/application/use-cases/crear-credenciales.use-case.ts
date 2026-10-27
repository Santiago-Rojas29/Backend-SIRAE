import { Inject, Injectable } from '@nestjs/common';
import type { CredencialesRepository } from '../../domain/ports/Credenciales.repository';
import { Credenciales, EstadoCredencial } from '../../domain/entities/Credenciales.entity';
import { CIFRAR } from '../../domain/ports/cifrador.port';
import type { CifradorPort } from '../../domain/ports/cifrador.port';

@Injectable()
export class CrearCredencialesUseCase {
  constructor(
    @Inject('CredencialesRepository')
    private readonly repo: CredencialesRepository,
    @Inject(CIFRAR)
    private readonly cifrador: CifradorPort,
  ) {}

  async execute(data: {
    centro_id_FK: string;
    tipo_credenciales_id_FK: string;
    usuario: string;
    contrasena: string;
  }): Promise<Credenciales> {
    const textoPlano = JSON.stringify({ usuario: data.usuario, contrasena: data.contrasena });
    const { datos_encryptados, iv, auth_tag } = this.cifrador.cifrar(textoPlano);

    const entity = new Credenciales(
      '',
      data.centro_id_FK,
      data.tipo_credenciales_id_FK,
      datos_encryptados,
      iv,
      auth_tag,
      EstadoCredencial.ACTIVA,
      undefined,
      new Date(),
    );
    entity.validar();
    return this.repo.crear(entity);
  }
}
