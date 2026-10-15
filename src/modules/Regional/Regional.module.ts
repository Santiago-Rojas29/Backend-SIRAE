import { Module } from '@nestjs/common';
import { RegionalController } from './infrastructure/adapters/in/Regional.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionalOrmEntity } from './infrastructure/entities/Regional.orm-entity';
import { CrearRegionalUseCase } from './application/use-cases/crear-regional.use-case';
import { actualizarRegionalUseCase } from './application/use-cases/actualizar-regional.use-case';
import { elimiarRegionalUseCase } from './application/use-cases/eliminar-regional.use-case';
import { obtenerRegionalTodoslUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerRegionalPorIdUseCase } from './application/use-cases/obtener-por-id.use-case';
import { RegionalTypeOrmRepository } from './infrastructure/adapters/out/Regional.typeorm-repository';


@Module({
  controllers: [RegionalController],
  imports:[ TypeOrmModule.forFeature([RegionalOrmEntity])],
  providers: [
    CrearRegionalUseCase,
    actualizarRegionalUseCase,
    elimiarRegionalUseCase,
    obtenerRegionalTodoslUseCase,
    obtenerRegionalPorIdUseCase,
    {
      provide: 'RegionalRepository',
      useClass: RegionalTypeOrmRepository,
    },

  ],

})
export class RegionalModule {}
