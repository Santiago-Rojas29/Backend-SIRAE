import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResolucionOrmEntity } from './infrastructure/entities/Resolucion.orm-entity';
import { ResolucionController } from './infrastructure/adapters/in/Resolucion.controller';
import { ResolucionTypeOrmRepository } from './infrastructure/adapters/out/Resolucion.typeorm-repository';
import { CrearResolucionUseCase } from './application/use-cases/crear-resolucion.use-case';
import { actualizarResolucionUseCase } from './application/use-cases/actualizar-resolucion.use-case';
import { ObtenerTodosResolucionUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdResolucionUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarResolucionUseCase } from './application/use-cases/eliminar-resolucion.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ResolucionOrmEntity])],
  controllers: [ResolucionController],
  providers: [
    CrearResolucionUseCase,
    actualizarResolucionUseCase,
    ObtenerTodosResolucionUseCase,
    obtenerPorIdResolucionUseCase,
    eliminarResolucionUseCase,
    { provide: 'ResolucionRepository', useClass: ResolucionTypeOrmRepository },
  ],
})
export class ResolucionModule {}
