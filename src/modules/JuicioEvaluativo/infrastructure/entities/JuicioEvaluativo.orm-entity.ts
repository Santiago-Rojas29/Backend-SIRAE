import { MatriculaOrmEntity } from 'src/modules/Matricula/infrastructure/entities/Matricula.orm-entity';
import { ResultadoaprendizajeOrmEntity } from 'src/modules/Resultadoaprendizaje/infrastructure/entities/Resultadoaprendizaje.orm-entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('JuicioEvaluativo')
export class JuicioEvaluativoOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_juicioevaluativo!: string;

  @Column('uuid')
  matricula_id_FK!: string;

  @ManyToOne(()=>MatriculaOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'matricula_id_FK'})
  matricula?:MatriculaOrmEntity

  @Column('uuid')
  resultado_aprendizaje_id_FK!: string;

  @ManyToOne(()=>ResultadoaprendizajeOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'resultado_aprendizaje_id_FK'})
  resultado_aprendizaje?:ResultadoaprendizajeOrmEntity

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
