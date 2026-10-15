import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolPermisoOrmEntity } from './infrastructure/entities/RolPermiso.orm-entity';
import { RolPermisoController } from './infrastructure/adapters/in/RolPermiso.controller';
import { RolPermisoTypeOrmRepository } from './infrastructure/adapters/out/RolPermiso.typeorm-repository';
import { CrearRolPermisoUseCase } from './application/use-cases/crear-rolpermiso.use-case';
import { actualizarRolPermisoUseCase } from './application/use-cases/actualizar-rolpermiso.use-case';
import { ObtenerTodosRolPermisoUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdRolPermisoUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarRolPermisoUseCase } from './application/use-cases/eliminar-rolpermiso.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([RolPermisoOrmEntity])],
  controllers: [RolPermisoController],
  providers: [
    CrearRolPermisoUseCase,
    actualizarRolPermisoUseCase,
    ObtenerTodosRolPermisoUseCase,
    obtenerPorIdRolPermisoUseCase,
    eliminarRolPermisoUseCase,
    { provide: 'RolPermisoRepository', useClass: RolPermisoTypeOrmRepository },
  ],
})
export class RolPermisoModule {}
