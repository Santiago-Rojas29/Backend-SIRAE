import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Resultadoaprendizaje')
export class ResultadoaprendizajeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_resultadoaprendizaje!: string;

  @Column('uuid')
  competencia_id_FK!: string;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  codigo!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
