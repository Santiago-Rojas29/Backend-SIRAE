import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HASHER } from 'src/modules/Usuario/domain/ports/hasher.port';
import type { HasherPort } from 'src/modules/Usuario/domain/ports/hasher.port';
import type { UsuarioRepository } from 'src/modules/Usuario/domain/ports/Usuario.repository';

@Injectable()
export class LoginUseCase {
  constructor(
    @Inject('UsuarioRepository')
    private readonly repo: UsuarioRepository,
    @Inject(HASHER)
    private readonly hasher: HasherPort,
    private readonly jwtService: JwtService,
  ) {}

  async execute(data: { correo: string; contrasena: string }): Promise<{ access_token: string }> {
    const usuario = await this.repo.obtenerPorCorreo(data.correo);
    if (!usuario) {
      throw new UnauthorizedException('Credenciales invalidas');
    }

    const coincide = await this.hasher.comparar(data.contrasena, usuario.password);
    if (!coincide) {
      throw new UnauthorizedException('Credenciales invalidas');
    }

    const payload = { sub: usuario.id_usuario, correo: usuario.correo };
    const access_token = await this.jwtService.signAsync(payload);
    return { access_token };
  }
}
