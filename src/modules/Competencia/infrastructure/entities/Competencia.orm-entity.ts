import { ProgramaOrmEntity } from 'src/modules/Programa/infrastructure/entities/Programa.orm-entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('Competencia')
export class CompetenciaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_competencia!: string;

  @Column('uuid')
  programa_id_FK!: string;

  @ManyToOne(()=>ProgramaOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'programa_id_FK'})
  programa?:ProgramaOrmEntity

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
