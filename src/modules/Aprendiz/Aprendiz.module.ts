import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AprendizOrmEntity } from './infrastructure/entities/Aprendiz.orm-entity';
import { AprendizController } from './infrastructure/adapters/in/Aprendiz.controller';
import { AprendizTypeOrmRepository } from './infrastructure/adapters/out/Aprendiz.typeorm-repository';
import { CrearAprendizUseCase } from './application/use-cases/crear-aprendiz.use-case';
import { actualizarAprendizUseCase } from './application/use-cases/actualizar-aprendiz.use-case';
import { ObtenerTodosAprendizUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdAprendizUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarAprendizUseCase } from './application/use-cases/eliminar-aprendiz.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([AprendizOrmEntity])],
  controllers: [AprendizController],
  providers: [
    CrearAprendizUseCase,
    actualizarAprendizUseCase,
    ObtenerTodosAprendizUseCase,
    obtenerPorIdAprendizUseCase,
    eliminarAprendizUseCase,
    { provide: 'AprendizRepository', useClass: AprendizTypeOrmRepository },
  ],
})
export class AprendizModule {}
