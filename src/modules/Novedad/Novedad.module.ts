import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NovedadOrmEntity } from './infrastructure/entities/Novedad.orm-entity';
import { NovedadController } from './infrastructure/adapters/in/Novedad.controller';
import { NovedadTypeOrmRepository } from './infrastructure/adapters/out/Novedad.typeorm-repository';
import { CrearNovedadUseCase } from './application/use-cases/crear-novedad.use-case';
import { actualizarNovedadUseCase } from './application/use-cases/actualizar-novedad.use-case';
import { ObtenerTodosNovedadUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdNovedadUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarNovedadUseCase } from './application/use-cases/eliminar-novedad.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([NovedadOrmEntity])],
  controllers: [NovedadController],
  providers: [
    CrearNovedadUseCase,
    actualizarNovedadUseCase,
    ObtenerTodosNovedadUseCase,
    obtenerPorIdNovedadUseCase,
    eliminarNovedadUseCase,
    { provide: 'NovedadRepository', useClass: NovedadTypeOrmRepository },
  ],
})
export class NovedadModule {}
