import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaOrmEntity } from './infrastructure/entities/Ficha.orm-entity';
import { FichaController } from './infrastructure/adapters/in/Ficha.controller';
import { FichaTypeOrmRepository } from './infrastructure/adapters/out/Ficha.typeorm-repository';
import { CrearFichaUseCase } from './application/use-cases/crear-ficha.use-case';
import { actualizarFichaUseCase } from './application/use-cases/actualizar-ficha.use-case';
import { ObtenerTodosFichaUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdFichaUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarFichaUseCase } from './application/use-cases/eliminar-ficha.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([FichaOrmEntity])],
  controllers: [FichaController],
  providers: [
    CrearFichaUseCase,
    actualizarFichaUseCase,
    ObtenerTodosFichaUseCase,
    obtenerPorIdFichaUseCase,
    eliminarFichaUseCase,
    { provide: 'FichaRepository', useClass: FichaTypeOrmRepository },
  ],
})
export class FichaModule {}
