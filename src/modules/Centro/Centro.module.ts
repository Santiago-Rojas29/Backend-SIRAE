import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroOrmEntity } from './infrastructure/entities/Centro.orm-entity';
import { CentroController } from './infrastructure/adapters/in/Centro.controller';
import { CentroTypeOrmRepository } from './infrastructure/adapters/out/Centro.typeorm-repository';
import { CrearCentroUseCase } from './application/use-cases/crear-centro.use-case';
import { actualizarCentroUseCase } from './application/use-cases/actualizar-centro.use-case';
import { eliminarCentroUseCase } from './application/use-cases/eliminar-centro.use-case';
import { obtenerPorIdCentroUseCase } from './application/use-cases/obtener-por-id.use-case';
import { obtenerRegionalTodoslUseCase } from '../Regional/application/use-cases/obtener-todos.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([CentroOrmEntity])],
  controllers: [CentroController],
  providers: [
    CrearCentroUseCase,
    actualizarCentroUseCase,
    eliminarCentroUseCase,
    obtenerPorIdCentroUseCase,
    obtenerRegionalTodoslUseCase,
    { provide: 'CentroRepository', useClass: CentroTypeOrmRepository },
  ],
})
export class CentroModule {}
