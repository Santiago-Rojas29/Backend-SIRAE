import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeleccionEpOrmEntity } from './infrastructure/entities/SeleccionEp.orm-entity';
import { SeleccionEpController } from './infrastructure/adapters/in/SeleccionEp.controller';
import { SeleccionEpTypeOrmRepository } from './infrastructure/adapters/out/SeleccionEp.typeorm-repository';
import { CrearSeleccionEpUseCase } from './application/use-cases/crear-seleccionep.use-case';
import { actualizarSeleccionEpUseCase } from './application/use-cases/actualizar-seleccionep.use-case';
import { ObtenerTodosSeleccionEpUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdSeleccionEpUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarSeleccionEpUseCase } from './application/use-cases/eliminar-seleccionep.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([SeleccionEpOrmEntity])],
  controllers: [SeleccionEpController],
  providers: [
    CrearSeleccionEpUseCase,
    actualizarSeleccionEpUseCase,
    ObtenerTodosSeleccionEpUseCase,
    obtenerPorIdSeleccionEpUseCase,
    eliminarSeleccionEpUseCase,
    { provide: 'SeleccionEpRepository', useClass: SeleccionEpTypeOrmRepository },
  ],
})
export class SeleccionEpModule {}
