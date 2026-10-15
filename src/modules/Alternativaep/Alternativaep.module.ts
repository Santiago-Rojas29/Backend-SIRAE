import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlternativaepOrmEntity } from './infrastructure/entities/Alternativaep.orm-entity';
import { AlternativaepController } from './infrastructure/adapters/in/Alternativaep.controller';
import { AlternativaepTypeOrmRepository } from './infrastructure/adapters/out/Alternativaep.typeorm-repository';
import { CrearAlternativaepUseCase } from './application/use-cases/crear-alternativaep.use-case';
import { ActualizarAlternativaepUseCase } from './application/use-cases/actualizar-alternativaep.use-case';
import { EliminarAlternativaepUseCase } from './application/use-cases/eliminar-alternativaep.use-case';
import { ObtenerPorIdAlternativaepUseCase } from './application/use-cases/obtener-por-id.use-case';
import { ObtenerTodosAlternativaepUseCase } from './application/use-cases/obtener-todos.use-case';


@Module({
  imports: [TypeOrmModule.forFeature([AlternativaepOrmEntity])],
  controllers: [AlternativaepController],
  providers: [
    CrearAlternativaepUseCase,
    ActualizarAlternativaepUseCase,
    EliminarAlternativaepUseCase,
    ObtenerPorIdAlternativaepUseCase,
    ObtenerTodosAlternativaepUseCase,
    { provide: 'AlternativaepRepository', useClass: AlternativaepTypeOrmRepository },
  ],
})
export class AlternativaepModule {}
