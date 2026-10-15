import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculaOrmEntity } from './infrastructure/entities/Matricula.orm-entity';
import { MatriculaController } from './infrastructure/adapters/in/Matricula.controller';
import { MatriculaTypeOrmRepository } from './infrastructure/adapters/out/Matricula.typeorm-repository';
import { CrearMatriculaUseCase } from './application/use-cases/crear-matricula.use-case';
import { actualizarMatriculaUseCase } from './application/use-cases/actualizar-matricula.use-case';
import { ObtenerTodosMatriculaUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdMatriculaUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarMatriculaUseCase } from './application/use-cases/eliminar-matricula.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([MatriculaOrmEntity])],
  controllers: [MatriculaController],
  providers: [
    CrearMatriculaUseCase,
    actualizarMatriculaUseCase,
    ObtenerTodosMatriculaUseCase,
    obtenerPorIdMatriculaUseCase,
    eliminarMatriculaUseCase,
    { provide: 'MatriculaRepository', useClass: MatriculaTypeOrmRepository },
  ],
})
export class MatriculaModule {}
