import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { TipoDocumento, Genero } from '../../domain/entities/Aprendiz.entity';

@Entity('Aprendiz')
export class AprendizOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_aprendiz!: string;

  @Column({ type: 'varchar', length: 10, enum: TipoDocumento })
  tipo_documento!: TipoDocumento;

  @Column({ type: 'varchar', length: 20, unique: true })
  numero_documento!: string;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'varchar', length: 100 })
  apellidos!: string;

  @Column({ type: 'date', nullable: true })
  fecha_nacimiento?: Date;

  @Column({ type: 'varchar', length: 5, enum: Genero, nullable: true })
  genero?: Genero;

  @Column({ type: 'varchar', length: 5, nullable: true })
  estrato?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  celular?: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  correo?: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  direccion?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  municipio?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  discapacidad?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
