import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramaOrmEntity } from './infrastructure/entities/Programa.orm-entity';
import { ProgramaController } from './infrastructure/adapters/in/Programa.controller';
import { ProgramaTypeOrmRepository } from './infrastructure/adapters/out/Programa.typeorm-repository';
import { CrearProgramaUseCase } from './application/use-cases/crear-programa.use-case';
import { actualizarProgramaUseCase } from './application/use-cases/actualizar-programa.use-case';
import { ObtenerTodosProgramaUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerPorIdProgramaUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarProgramaUseCase } from './application/use-cases/eliminar-programa.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramaOrmEntity])],
  controllers: [ProgramaController],
  providers: [
    CrearProgramaUseCase,
    actualizarProgramaUseCase,
    ObtenerTodosProgramaUseCase,
    obtenerPorIdProgramaUseCase,
    eliminarProgramaUseCase,
    { provide: 'ProgramaRepository', useClass: ProgramaTypeOrmRepository },
  ],
})
export class ProgramaModule {}
