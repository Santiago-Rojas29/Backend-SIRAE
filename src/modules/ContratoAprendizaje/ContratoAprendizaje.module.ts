import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratoAprendizajeOrmEntity } from './infrastructure/entities/ContratoAprendizaje.orm-entity';
import { ContratoAprendizajeController } from './infrastructure/adapters/in/ContratoAprendizaje.controller';
import { ContratoAprendizajeTypeOrmRepository } from './infrastructure/adapters/out/ContratoAprendizaje.typeorm-repository';
import { CrearContratoAprendizajeUseCase } from './application/use-cases/crear-contratoaprendizaje.use-case';
import { actualizarContratoAprendizajeUseCase } from './application/use-cases/actualizar-contratoaprendizaje.use-case';
import { ObtenerTodosContratoAprendizajeUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdContratoAprendizajeUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarContratoAprendizajeUseCase } from './application/use-cases/eliminar-contratoaprendizaje.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ContratoAprendizajeOrmEntity])],
  controllers: [ContratoAprendizajeController],
  providers: [
    CrearContratoAprendizajeUseCase,
    actualizarContratoAprendizajeUseCase,
    ObtenerTodosContratoAprendizajeUseCase,
    obtenerPorIdContratoAprendizajeUseCase,
    eliminarContratoAprendizajeUseCase,
    { provide: 'ContratoAprendizajeRepository', useClass: ContratoAprendizajeTypeOrmRepository },
  ],
})
export class ContratoAprendizajeModule {}
