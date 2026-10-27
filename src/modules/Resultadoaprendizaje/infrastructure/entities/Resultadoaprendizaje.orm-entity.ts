import { CompetenciaOrmEntity } from 'src/modules/Competencia/infrastructure/entities/Competencia.orm-entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('Resultadoaprendizaje')
export class ResultadoaprendizajeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_resultadoaprendizaje!: string;

  @Column('uuid')
  competencia_id_FK!: string;

  @ManyToOne(()=>CompetenciaOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'competencia_id_FK'})
  competencia?:CompetenciaOrmEntity

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  codigo!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
