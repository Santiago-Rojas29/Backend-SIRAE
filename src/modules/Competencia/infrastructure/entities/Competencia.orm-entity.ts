import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Competencia')
export class CompetenciaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_competencia!: string;

  @Column('uuid')
  programa_id_FK!: string;

  @Column({ type: 'varchar', length: 100 })
  codigo!: string;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'boolean', default: false })
  es_etapa_productiva!: boolean;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
