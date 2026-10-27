import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobEjecutionOrmEntity } from './infrastructure/entities/JobEjecution.orm-entity';
import { JobEjecutionController } from './infrastructure/adapters/in/JobEjecution.controller';
import { JobEjecutionTypeOrmRepository } from './infrastructure/adapters/out/JobEjecution.typeorm-repository';
import { CrearJobEjecutionUseCase } from './application/use-cases/crear-jobejecution.use-case';
import { actualizarJobEjecutionUseCase } from './application/use-cases/actualizar-jobejecution.use-case';
import { ObtenerTodosJobEjecutionUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdJobEjecutionUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarJobEjecutionUseCase } from './application/use-cases/eliminar-jobejecution.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([JobEjecutionOrmEntity])],
  controllers: [JobEjecutionController],
  providers: [
    CrearJobEjecutionUseCase,
    actualizarJobEjecutionUseCase,
    ObtenerTodosJobEjecutionUseCase,
    obtenerPorIdJobEjecutionUseCase,
    eliminarJobEjecutionUseCase,
    { provide: 'JobEjecutionRepository', useClass: JobEjecutionTypeOrmRepository },
  ],
})
export class JobEjecutionModule {}
