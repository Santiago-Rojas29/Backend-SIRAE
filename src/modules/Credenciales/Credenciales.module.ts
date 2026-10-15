import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredencialesOrmEntity } from './infrastructure/entities/Credenciales.orm-entity';
import { CredencialesController } from './infrastructure/adapters/in/Credenciales.controller';
import { CredencialesTypeOrmRepository } from './infrastructure/adapters/out/Credenciales.typeorm-repository';
import { CrearCredencialesUseCase } from './application/use-cases/crear-credenciales.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([CredencialesOrmEntity])],
  controllers: [CredencialesController],
  providers: [
    CrearCredencialesUseCase,
    { provide: 'CredencialesRepository', useClass: CredencialesTypeOrmRepository },
  ],
})
export class CredencialesModule {}
