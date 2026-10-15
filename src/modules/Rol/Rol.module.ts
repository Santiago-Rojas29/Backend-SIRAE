import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolOrmEntity } from './infrastructure/entities/Rol.orm-entity';
import { RolController } from './infrastructure/adapters/in/Rol.controller';
import { RolTypeOrmRepository } from './infrastructure/adapters/out/Rol.typeorm-repository';
import { CrearRolUseCase } from './application/use-cases/crear-rol.use-case';
import { actualizarRolUseCase } from './application/use-cases/actualizar-rol.use-case';
import { ObtenerTodosRolUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdRolUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarRolUseCase } from './application/use-cases/eliminar-rol.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([RolOrmEntity])],
  controllers: [RolController],
  providers: [
    CrearRolUseCase,
    actualizarRolUseCase,
    ObtenerTodosRolUseCase,
    obtenerPorIdRolUseCase,
    eliminarRolUseCase,
    { provide: 'RolRepository', useClass: RolTypeOrmRepository },
  ],
})
export class RolModule {}
