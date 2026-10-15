#!/bin/bash

# Validar nombre del módulo
if [ -z "$1" ]; then
  echo "❌ Error: Debes pasar el nombre del módulo."
  echo "👉 Uso: ./generate-hex.sh nombre-modulo"
  exit 1
fi

# Nombre en minúsculas (para ids, rutas de import y archivos con guion)
LOWER_NAME="$(tr '[:upper:]' '[:lower:]' <<< "$1")"
# Nombre de clase en PascalCase (primera letra en mayúscula), igual que "Regional"
CLASS_NAME="$(tr '[:lower:]' '[:upper:]' <<< ${LOWER_NAME:0:1})${LOWER_NAME:1}"
# Campo de id propio del módulo, ej: id_regional, id_sede
ID_FIELD="id_${LOWER_NAME}"

BASE_DIR="src/modules/$CLASS_NAME"

echo "⚙️ Generando módulo: $CLASS_NAME..."

# Crear carpetas
mkdir -p $BASE_DIR/domain/{entities,ports}
mkdir -p $BASE_DIR/application/use-cases
mkdir -p $BASE_DIR/infrastructure/adapters/in/dto
mkdir -p $BASE_DIR/infrastructure/adapters/out
mkdir -p $BASE_DIR/infrastructure/entities

# =========================
# DOMAIN - ENTITY
# =========================
cat <<EOF > $BASE_DIR/domain/entities/$CLASS_NAME.entity.ts
export class $CLASS_NAME {
  constructor(
    public nombre: string,
    public codigo: string,
    public readonly $ID_FIELD?: string,
    public created_at?: Date,
    public updated_at?: Date,
  ) {}

  validar(): void {
    if (!this.nombre) throw new Error('El nombre es obligatorio');
    if (!this.codigo) throw new Error('El codigo es obligatorio');
  }
}
EOF

# =========================
# DOMAIN - REPOSITORY (puerto)
# =========================
cat <<EOF > $BASE_DIR/domain/ports/$CLASS_NAME.repository.ts
import { $CLASS_NAME } from '../entities/$CLASS_NAME.entity';

export interface ${CLASS_NAME}Repository {
  crear(entity: $CLASS_NAME): Promise<$CLASS_NAME>;
  obtenerTodos(): Promise<$CLASS_NAME[]>;
  obtenerPorId(id: string): Promise<$CLASS_NAME | null>;
  actualizar(id: string, data: Partial<$CLASS_NAME>): Promise<$CLASS_NAME>;
  eliminar(id: string): Promise<void>;
}
EOF

# =========================
# APPLICATION - USE CASE (crear)
# =========================
cat <<EOF > $BASE_DIR/application/use-cases/crear-$LOWER_NAME.use-case.ts
import { Inject, Injectable } from '@nestjs/common';
import { ${CLASS_NAME}Repository } from '../../domain/ports/$CLASS_NAME.repository';
import { $CLASS_NAME } from '../../domain/entities/$CLASS_NAME.entity';

@Injectable()
export class Crear${CLASS_NAME}UseCase {
  constructor(
    @Inject('${CLASS_NAME}Repository')
    private readonly repo: ${CLASS_NAME}Repository,
  ) {}

  async execute(data: { nombre: string; codigo: string }): Promise<$CLASS_NAME> {
    const entity = new $CLASS_NAME(data.nombre, data.codigo);
    return this.repo.crear(entity);
  }
}
EOF

# =========================
# INFRASTRUCTURE - ORM ENTITY
# =========================
cat <<EOF > $BASE_DIR/infrastructure/entities/$CLASS_NAME.orm-entity.ts
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('$CLASS_NAME')
export class ${CLASS_NAME}OrmEntity {
  @PrimaryGeneratedColumn('uuid')
  $ID_FIELD!: string;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  codigo!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
EOF

# =========================
# INFRASTRUCTURE - DTOs
# =========================
cat <<EOF > $BASE_DIR/infrastructure/adapters/in/dto/crear-$LOWER_NAME.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class crear${CLASS_NAME}Dto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  codigo!: string;
}
EOF

cat <<EOF > $BASE_DIR/infrastructure/adapters/in/dto/actualizar-$LOWER_NAME.dto.ts
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizar${CLASS_NAME}Dto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  codigo?: string;
}
EOF

# =========================
# INFRASTRUCTURE - CONTROLLER
# =========================
cat <<EOF > $BASE_DIR/infrastructure/adapters/in/$CLASS_NAME.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { Crear${CLASS_NAME}UseCase } from '../../../application/use-cases/crear-$LOWER_NAME.use-case';
import { crear${CLASS_NAME}Dto } from './dto/crear-$LOWER_NAME.dto';

@Controller('$CLASS_NAME')
export class ${CLASS_NAME}Controller {
  constructor(private readonly crearUseCase: Crear${CLASS_NAME}UseCase) {}

  @Post()
  crear(@Body() body: crear${CLASS_NAME}Dto) {
    return this.crearUseCase.execute(body);
  }
}
EOF

# =========================
# INFRASTRUCTURE - TYPEORM REPOSITORY (adaptador)
# =========================
cat <<EOF > $BASE_DIR/infrastructure/adapters/out/$CLASS_NAME.typeorm-repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ${CLASS_NAME}Repository } from '../../../domain/ports/$CLASS_NAME.repository';
import { $CLASS_NAME } from '../../../domain/entities/$CLASS_NAME.entity';
import { ${CLASS_NAME}OrmEntity } from '../../entities/$CLASS_NAME.orm-entity';

@Injectable()
export class ${CLASS_NAME}TypeOrmRepository implements ${CLASS_NAME}Repository {
  constructor(
    @InjectRepository(${CLASS_NAME}OrmEntity)
    private readonly repo: Repository<${CLASS_NAME}OrmEntity>,
  ) {}

  async crear(entity: $CLASS_NAME): Promise<$CLASS_NAME> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }

  async obtenerTodos(): Promise<$CLASS_NAME[]> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }

  async obtenerPorId(id: string): Promise<$CLASS_NAME | null> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }

  async actualizar(id: string, data: Partial<$CLASS_NAME>): Promise<$CLASS_NAME> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }

  async eliminar(id: string): Promise<void> {
    // TODO: implementar
    throw new Error('Método no implementado');
  }
}
EOF

# =========================
# MODULE
# =========================
cat <<EOF > $BASE_DIR/$CLASS_NAME.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ${CLASS_NAME}OrmEntity } from './infrastructure/entities/$CLASS_NAME.orm-entity';
import { ${CLASS_NAME}Controller } from './infrastructure/adapters/in/$CLASS_NAME.controller';
import { ${CLASS_NAME}TypeOrmRepository } from './infrastructure/adapters/out/$CLASS_NAME.typeorm-repository';
import { Crear${CLASS_NAME}UseCase } from './application/use-cases/crear-$LOWER_NAME.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([${CLASS_NAME}OrmEntity])],
  controllers: [${CLASS_NAME}Controller],
  providers: [
    Crear${CLASS_NAME}UseCase,
    { provide: '${CLASS_NAME}Repository', useClass: ${CLASS_NAME}TypeOrmRepository },
  ],
})
export class ${CLASS_NAME}Module {}
EOF

echo "✅ Módulo $CLASS_NAME creado con plantillas completas 🚀"
