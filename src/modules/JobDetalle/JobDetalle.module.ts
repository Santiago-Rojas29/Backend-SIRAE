import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobDetalleOrmEntity } from './infrastructure/entities/JobDetalle.orm-entity';
import { JobDetalleController } from './infrastructure/adapters/in/JobDetalle.controller';
import { JobDetalleTypeOrmRepository } from './infrastructure/adapters/out/JobDetalle.typeorm-repository';
import { CrearJobDetalleUseCase } from './application/use-cases/crear-jobdetalle.use-case';
import { actualizarJobDetalleUseCase } from './application/use-cases/actualizar-jobdetalle.use-case';
import { ObtenerTodosJobDetalleUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdJobDetalleUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarJobDetalleUseCase } from './application/use-cases/eliminar-jobdetalle.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([JobDetalleOrmEntity])],
  controllers: [JobDetalleController],
  providers: [
    CrearJobDetalleUseCase,
    actualizarJobDetalleUseCase,
    ObtenerTodosJobDetalleUseCase,
    obtenerPorIdJobDetalleUseCase,
    eliminarJobDetalleUseCase,
    { provide: 'JobDetalleRepository', useClass: JobDetalleTypeOrmRepository },
  ],
})
export class JobDetalleModule {}
