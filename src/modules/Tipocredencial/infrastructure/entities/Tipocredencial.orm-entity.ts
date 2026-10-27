import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import { TipoPlataforma } from '../../domain/entities/Tipocredencial.entity';

@Entity('Tipocredencial')
@Unique(['plataforma', 'nombre'])
export class TipocredencialOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_tipocredencial!: string;

  @Column({ type: 'varchar', length: 20, enum: TipoPlataforma })
  plataforma!: TipoPlataforma;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'text' })
  roles!: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  descripcion?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
