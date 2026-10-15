import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetenciaOrmEntity } from './infrastructure/entities/Competencia.orm-entity';
import { CompetenciaController } from './infrastructure/adapters/in/Competencia.controller';
import { CompetenciaTypeOrmRepository } from './infrastructure/adapters/out/Competencia.typeorm-repository';
import { CrearCompetenciaUseCase } from './application/use-cases/crear-competencia.use-case';
import { actualizarCompetenciaUseCase } from './application/use-cases/actualizar-competencia.use-case';
import { ObtenerTodosCompetenciaUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdCompetenciaUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarCompetenciaUseCase } from './application/use-cases/eliminar-competencia.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([CompetenciaOrmEntity])],
  controllers: [CompetenciaController],
  providers: [
    CrearCompetenciaUseCase,
    actualizarCompetenciaUseCase,
    ObtenerTodosCompetenciaUseCase,
    obtenerPorIdCompetenciaUseCase,
    eliminarCompetenciaUseCase,
    { provide: 'CompetenciaRepository', useClass: CompetenciaTypeOrmRepository },
  ],
})
export class CompetenciaModule {}
