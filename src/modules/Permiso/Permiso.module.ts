import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermisoOrmEntity } from './infrastructure/entities/Permiso.orm-entity';
import { PermisoController } from './infrastructure/adapters/in/Permiso.controller';
import { PermisoTypeOrmRepository } from './infrastructure/adapters/out/Permiso.typeorm-repository';
import { CrearPermisoUseCase } from './application/use-cases/crear-permiso.use-case';
import { actualizarPermisoUseCase } from './application/use-cases/actualizar-permiso.use-case';
import { ObtenerTodosPermisoUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdPermisoUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarPermisoUseCase } from './application/use-cases/eliminar-permiso.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([PermisoOrmEntity])],
  controllers: [PermisoController],
  providers: [
    CrearPermisoUseCase,
    actualizarPermisoUseCase,
    ObtenerTodosPermisoUseCase,
    obtenerPorIdPermisoUseCase,
    eliminarPermisoUseCase,
    { provide: 'PermisoRepository', useClass: PermisoTypeOrmRepository },
  ],
})
export class PermisoModule {}
