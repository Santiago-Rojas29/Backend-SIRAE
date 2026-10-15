import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoNovedadOrmEntity } from './infrastructure/entities/TipoNovedad.orm-entity';
import { TipoNovedadController } from './infrastructure/adapters/in/TipoNovedad.controller';
import { TipoNovedadTypeOrmRepository } from './infrastructure/adapters/out/TipoNovedad.typeorm-repository';
import { CrearTipoNovedadUseCase } from './application/use-cases/crear-tiponovedad.use-case';
import { actualizarTipoNovedadUseCase } from './application/use-cases/actualizar-tiponovedad.use-case';
import { ObtenerTodosTipoNovedadUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdTipoNovedadUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarTipoNovedadUseCase } from './application/use-cases/eliminar-tiponovedad.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([TipoNovedadOrmEntity])],
  controllers: [TipoNovedadController],
  providers: [
    CrearTipoNovedadUseCase,
    actualizarTipoNovedadUseCase,
    ObtenerTodosTipoNovedadUseCase,
    obtenerPorIdTipoNovedadUseCase,
    eliminarTipoNovedadUseCase,
    { provide: 'TipoNovedadRepository', useClass: TipoNovedadTypeOrmRepository },
  ],
})
export class TipoNovedadModule {}
