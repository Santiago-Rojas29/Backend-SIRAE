import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('JuicioEvaluativo')
export class JuicioEvaluativoOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_juicioevaluativo!: string;

  @Column('uuid')
  matricula_id_FK!: string;

  @Column('uuid')
  resultado_aprendizaje_id_FK!: string;

  @Column({ type: 'varchar', length: 50 })
  calificacion!: string;

  @Column({ type: 'timestamp' })
  fecha_hora!: Date;

  @Column({ type: 'varchar', length: 100 })
  funcionario!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
