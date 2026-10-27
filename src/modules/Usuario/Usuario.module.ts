import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioOrmEntity } from './infrastructure/entities/Usuario.orm-entity';
import { UsuarioController } from './infrastructure/adapters/in/Usuario.controller';
import { UsuarioTypeOrmRepository } from './infrastructure/adapters/out/Usuario.typeorm-repository';
import { CrearUsuarioUseCase } from './application/use-cases/crear-usuario.use-case';
import { actualizarUsuarioUseCase } from './application/use-cases/actualizar-usuario.use-case';
import { obtenerTodosUsuarioUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerUsuarioPorIdUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarUsuarioUseCase } from './application/use-cases/eliminar-usuario.use-case';
import { BcryptHasher } from './infrastructure/adapters/out/bcrypt.hasher';
import { HASHER } from './domain/ports/hasher.port';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioOrmEntity])],
  controllers: [UsuarioController],
  providers: [
    CrearUsuarioUseCase,
    actualizarUsuarioUseCase,
    obtenerTodosUsuarioUseCase,
    obtenerUsuarioPorIdUseCase,
    eliminarUsuarioUseCase,
    
    { provide: 'UsuarioRepository', useClass: UsuarioTypeOrmRepository },
    { provide: HASHER, useClass:BcryptHasher},
  ],
  exports: ['UsuarioRepository', HASHER],
})
export class UsuarioModule {}
