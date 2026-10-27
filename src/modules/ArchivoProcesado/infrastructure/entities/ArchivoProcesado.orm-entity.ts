import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { JobEjecutionOrmEntity } from 'src/modules/JobEjecution/infrastructure/entities/JobEjecution.orm-entity';

@Entity('ArchivoProcesado')
export class ArchivoProcesadoOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_archivoprocesado!: string;

  @Column('uuid')
  job_ejecution_id_FK!: string;

  @ManyToOne(()=>JobEjecutionOrmEntity,{onDelete:'CASCADE'})
  @JoinColumn({name:'job_ejecution_id_FK'})
  job_ejecution?:JobEjecutionOrmEntity

  @Column({ type: 'varchar', length: 255 })
  nombre_archivo!: string;

  @Column({ type: 'varchar', length: 500 })
  ruta!: string;

  @Column({ type: 'varchar', length: 50 })
  tipo!: string;

  @Column({ type: 'int' })
  tipo_reporte!: number;

  @Column({ type: 'varchar', length: 128 })
  hash_archivo!: string;

  @Column({ type: 'bigint' })
  tamanio!: string;

  @Column({ type: 'timestamp' })
  fecha_procesamiento!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
