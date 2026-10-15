import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRolOrmEntity } from './infrastructure/entities/UsuarioRol.orm-entity';
import { UsuarioRolController } from './infrastructure/adapters/in/UsuarioRol.controller';
import { UsuarioRolTypeOrmRepository } from './infrastructure/adapters/out/UsuarioRol.typeorm-repository';
import { CrearUsuarioRolUseCase } from './application/use-cases/crear-usuariorol.use-case';
import { actualizarUsuarioRolUseCase } from './application/use-cases/actualizar-usuariorol.use-case';
import { ObtenerTodosUsuarioRolUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdUsuarioRolUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarUsuarioRolUseCase } from './application/use-cases/eliminar-usuariorol.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioRolOrmEntity])],
  controllers: [UsuarioRolController],
  providers: [
    CrearUsuarioRolUseCase,
    actualizarUsuarioRolUseCase,
    ObtenerTodosUsuarioRolUseCase,
    obtenerPorIdUsuarioRolUseCase,
    eliminarUsuarioRolUseCase,
    { provide: 'UsuarioRolRepository', useClass: UsuarioRolTypeOrmRepository },
  ],
})
export class UsuarioRolModule {}
