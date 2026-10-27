import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipocredencialOrmEntity } from './infrastructure/entities/Tipocredencial.orm-entity';
import { TipocredencialController } from './infrastructure/adapters/in/Tipocredencial.controller';
import { TipocredencialTypeOrmRepository } from './infrastructure/adapters/out/Tipocredencial.typeorm-repository';
import { CrearTipocredencialUseCase } from './application/use-cases/crear-tipocredencial.use-case';
import { ActualizarTipoCredencialUseCase } from './application/use-cases/actualizar-tipocredencial.use-case';
import { EliminarTipocredencialUseCase } from './application/use-cases/eliminar-tipocredencial.use-case';
import { ObtenerTipocredencialPorIdUseCase } from './application/use-cases/obtener-por-id.use-case';
import { ObtenerTodosTipocredencialUseCase } from './application/use-cases/obtener-todos.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([TipocredencialOrmEntity])],
  controllers: [TipocredencialController],
  providers: [
    CrearTipocredencialUseCase,
    ActualizarTipoCredencialUseCase,
    EliminarTipocredencialUseCase,
    ObtenerTipocredencialPorIdUseCase,
    ObtenerTodosTipocredencialUseCase,
    { provide: 'TipocredencialRepository', useClass: TipocredencialTypeOrmRepository },
  ],
})
export class TipocredencialModule {}
