import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresaOrmEntity } from './infrastructure/entities/Empresa.orm-entity';
import { EmpresaController } from './infrastructure/adapters/in/Empresa.controller';
import { EmpresaTypeOrmRepository } from './infrastructure/adapters/out/Empresa.typeorm-repository';
import { crearEmpresaUseCase } from './application/use-cases/crear-empresa.use-case';
import { actualizarEmpresaUseCase } from './application/use-cases/actualizar-empresa.use-case';
import { eliminarEmpresaUseCase } from './application/use-cases/eliminar-empresa.use-case';
import { obtenerEmpresaPorIdUseCase } from './application/use-cases/obtener-por-id.use-case';
import { obtenerTodosEmpresasUseCase } from './application/use-cases/obtener-todos.use-case';




@Module({
  imports: [TypeOrmModule.forFeature([EmpresaOrmEntity])],
  controllers: [EmpresaController],
  providers: [
    crearEmpresaUseCase,
    actualizarEmpresaUseCase,
    eliminarEmpresaUseCase,
    obtenerEmpresaPorIdUseCase,
    obtenerTodosEmpresasUseCase,
    { provide: 'EmpresaRepository', useClass: EmpresaTypeOrmRepository },
  ],
})
export class EmpresaModule {}
