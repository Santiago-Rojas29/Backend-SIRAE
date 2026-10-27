import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchivoProcesadoOrmEntity } from './infrastructure/entities/ArchivoProcesado.orm-entity';
import { ArchivoProcesadoController } from './infrastructure/adapters/in/ArchivoProcesado.controller';
import { ArchivoProcesadoTypeOrmRepository } from './infrastructure/adapters/out/ArchivoProcesado.typeorm-repository';
import { CrearArchivoProcesadoUseCase } from './application/use-cases/crear-archivoprocesado.use-case';
import { actualizarArchivoProcesadoUseCase } from './application/use-cases/actualizar-archivoprocesado.use-case';
import { ObtenerTodosArchivoProcesadoUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdArchivoProcesadoUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarArchivoProcesadoUseCase } from './application/use-cases/eliminar-archivoprocesado.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ArchivoProcesadoOrmEntity])],
  controllers: [ArchivoProcesadoController],
  providers: [
    CrearArchivoProcesadoUseCase,
    actualizarArchivoProcesadoUseCase,
    ObtenerTodosArchivoProcesadoUseCase,
    obtenerPorIdArchivoProcesadoUseCase,
    eliminarArchivoProcesadoUseCase,
    { provide: 'ArchivoProcesadoRepository', useClass: ArchivoProcesadoTypeOrmRepository },
  ],
})
export class ArchivoProcesadoModule {}
