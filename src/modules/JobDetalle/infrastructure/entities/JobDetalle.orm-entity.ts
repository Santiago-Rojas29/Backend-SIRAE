import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { JobEjecutionOrmEntity } from 'src/modules/JobEjecution/infrastructure/entities/JobEjecution.orm-entity';
import { MatriculaOrmEntity } from 'src/modules/Matricula/infrastructure/entities/Matricula.orm-entity';
import { FichaOrmEntity } from 'src/modules/Ficha/infrastructure/entities/Ficha.orm-entity';

@Entity('JobDetalle')
export class JobDetalleOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_jobdetalle!: string;

  @Column('uuid')
  job_ejecution_id_FK!: string;

  @ManyToOne(()=>JobEjecutionOrmEntity,{onDelete:'CASCADE'})
  @JoinColumn({name:'job_ejecution_id_FK'})
  job_ejecution?:JobEjecutionOrmEntity

  @Column({ type: 'uuid', nullable: true })
  matricula_id_FK!: string | null;

  @ManyToOne(()=>MatriculaOrmEntity,{onDelete:'SET NULL'})
  @JoinColumn({name:'matricula_id_FK'})
  matricula?:MatriculaOrmEntity | null

  @Column({ type: 'uuid', nullable: true })
  ficha_id_FK!: string | null;

  @ManyToOne(()=>FichaOrmEntity,{onDelete:'SET NULL'})
  @JoinColumn({name:'ficha_id_FK'})
  ficha?:FichaOrmEntity | null

  @Column({ type: 'varchar', length: 100 })
  referencia!: string;

  @Column({ type: 'varchar', length: 50 })
  resultado!: string;

  @Column({ type: 'text' })
  mensaje!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
