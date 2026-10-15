import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtapaProductivaOrmEntity } from './infrastructure/entities/EtapaProductiva.orm-entity';
import { EtapaProductivaController } from './infrastructure/adapters/in/EtapaProductiva.controller';
import { EtapaProductivaTypeOrmRepository } from './infrastructure/adapters/out/EtapaProductiva.typeorm-repository';
import { CrearEtapaProductivaUseCase } from './application/use-cases/crear-etapaproductiva.use-case';
import { actualizarEtapaProductivaUseCase } from './application/use-cases/actualizar-etapaproductiva.use-case';
import { ObtenerTodosEtapaProductivaUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdEtapaProductivaUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarEtapaProductivaUseCase } from './application/use-cases/eliminar-etapaproductiva.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([EtapaProductivaOrmEntity])],
  controllers: [EtapaProductivaController],
  providers: [
    CrearEtapaProductivaUseCase,
    actualizarEtapaProductivaUseCase,
    ObtenerTodosEtapaProductivaUseCase,
    obtenerPorIdEtapaProductivaUseCase,
    eliminarEtapaProductivaUseCase,
    { provide: 'EtapaProductivaRepository', useClass: EtapaProductivaTypeOrmRepository },
  ],
})
export class EtapaProductivaModule {}
