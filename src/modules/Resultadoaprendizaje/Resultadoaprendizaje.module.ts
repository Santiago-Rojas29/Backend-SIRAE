import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadoaprendizajeOrmEntity } from './infrastructure/entities/Resultadoaprendizaje.orm-entity';
import { ResultadoaprendizajeController } from './infrastructure/adapters/in/Resultadoaprendizaje.controller';
import { ResultadoaprendizajeTypeOrmRepository } from './infrastructure/adapters/out/Resultadoaprendizaje.typeorm-repository';
import { CrearResultadoaprendizajeUseCase } from './application/use-cases/crear-resultadoaprendizaje.use-case';
import { actualizarResultadoAprendizajeUseCase } from './application/use-cases/actualizar-resultadoaprendizaje.use-case';
import { eliminarResultadoAprendizajeUseCase } from './application/use-cases/eliminar-resultado-aprendizaje.use-case';
import { ObtenerTodosResultadoaprendizajeUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdResultadoaprendizajeUseCase } from './application/use-cases/obtener-por-id.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ResultadoaprendizajeOrmEntity])],
  controllers: [ResultadoaprendizajeController],
  providers: [
    CrearResultadoaprendizajeUseCase,
    actualizarResultadoAprendizajeUseCase,
    eliminarResultadoAprendizajeUseCase,
    ObtenerTodosResultadoaprendizajeUseCase,
    obtenerPorIdResultadoaprendizajeUseCase,
    { provide: 'ResultadoaprendizajeRepository', useClass: ResultadoaprendizajeTypeOrmRepository },
  ],
})
export class ResultadoaprendizajeModule {}
