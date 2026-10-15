import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEpOrmEntity } from './infrastructure/entities/CategoriaEp.orm-entity';
import { CategoriaEpController } from './infrastructure/adapters/in/CategoriaEp.controller';
import { CategoriaEpTypeOrmRepository } from './infrastructure/adapters/out/CategoriaEp.typeorm-repository';
import { CrearCategoriaEpUseCase } from './application/use-cases/crear-categoriaep.use-case';
import { actualizarCategoriaEpUseCase } from './application/use-cases/actualizar-categoriaep.use-case';
import { ObtenerTodosCategoriaEpUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdCategoriaEpUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarCategoriaEpUseCase } from './application/use-cases/eliminar-categoriaep.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEpOrmEntity])],
  controllers: [CategoriaEpController],
  providers: [
    CrearCategoriaEpUseCase,
    actualizarCategoriaEpUseCase,
    ObtenerTodosCategoriaEpUseCase,
    obtenerPorIdCategoriaEpUseCase,
    eliminarCategoriaEpUseCase,
    { provide: 'CategoriaEpRepository', useClass: CategoriaEpTypeOrmRepository },
  ],
})
export class CategoriaEpModule {}
