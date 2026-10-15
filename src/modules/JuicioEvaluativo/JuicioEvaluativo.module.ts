import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuicioEvaluativoOrmEntity } from './infrastructure/entities/JuicioEvaluativo.orm-entity';
import { JuicioEvaluativoController } from './infrastructure/adapters/in/JuicioEvaluativo.controller';
import { JuicioEvaluativoTypeOrmRepository } from './infrastructure/adapters/out/JuicioEvaluativo.typeorm-repository';
import { CrearJuicioEvaluativoUseCase } from './application/use-cases/crear-juicioevaluativo.use-case';
import { actualizarJuicioEvaluativoUseCase } from './application/use-cases/actualizar-juicioevaluativo.use-case';
import { ObtenerTodosJuicioEvaluativoUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdJuicioEvaluativoUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarJuicioEvaluativoUseCase } from './application/use-cases/eliminar-juicioevaluativo.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([JuicioEvaluativoOrmEntity])],
  controllers: [JuicioEvaluativoController],
  providers: [
    CrearJuicioEvaluativoUseCase,
    actualizarJuicioEvaluativoUseCase,
    ObtenerTodosJuicioEvaluativoUseCase,
    obtenerPorIdJuicioEvaluativoUseCase,
    eliminarJuicioEvaluativoUseCase,
    { provide: 'JuicioEvaluativoRepository', useClass: JuicioEvaluativoTypeOrmRepository },
  ],
})
export class JuicioEvaluativoModule {}
