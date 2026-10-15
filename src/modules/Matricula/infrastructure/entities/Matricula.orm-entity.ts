import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity('Matricula')
@Unique(['aprendiz_id_FK', 'ficha_id_FK'])
export class MatriculaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_matricula!: string;

  @Column('uuid')
  aprendiz_id_FK!: string;

  @Column('uuid')
  ficha_id_FK!: string;

  @Column({ type: 'varchar', length: 50 })
  estado!: string;

  @Column({ type: 'date', nullable: true })
  fecha_inicio?: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  estado_sgva?: string;

  @Column({ type: 'int', nullable: true })
  cantidad_contratos_sgva?: number;

  @Column({ type: 'timestamp', nullable: true })
  fecha_actualizacion_sgva?: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
