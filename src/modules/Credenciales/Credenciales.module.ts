import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CredencialesOrmEntity } from './infrastructure/entities/Credenciales.orm-entity';
import { CredencialesController } from './infrastructure/adapters/in/Credenciales.controller';
import { CredencialesTypeOrmRepository } from './infrastructure/adapters/out/Credenciales.typeorm-repository';
import { CrearCredencialesUseCase } from './application/use-cases/crear-credenciales.use-case';
import { obtenerTodosCredencialesUseCase } from './application/use-cases/obtener-todos.use-case';
import { obtenerCredencialesPorIdUseCase } from './application/use-cases/obtener-por-id.use-case';
import { eliminarCredencialesUseCase } from './application/use-cases/eliminar-credenciales.use-case';
import { CIFRAR } from './domain/ports/cifrador.port';
import { AesGcmCifrador } from './infrastructure/adapters/out/aes-gcm.cifrador';

@Module({
  imports: [TypeOrmModule.forFeature([CredencialesOrmEntity]), ConfigModule],
  controllers: [CredencialesController],
  providers: [
    CrearCredencialesUseCase,
    obtenerTodosCredencialesUseCase,
    obtenerCredencialesPorIdUseCase,
    eliminarCredencialesUseCase,
    { provide: 'CredencialesRepository', useClass: CredencialesTypeOrmRepository },
    { provide: CIFRAR, useClass: AesGcmCifrador },
  ],
})
export class CredencialesModule {}
