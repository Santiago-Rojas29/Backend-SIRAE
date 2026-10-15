import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('SeleccionEp')
export class SeleccionEpOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_seleccionep!: string;

  @Column('uuid')
  matricula_id_FK!: string;

  @Column('uuid')
  alternativa_id_FK!: string;

  @Column('uuid')
  alternativa_original_id_FK!: string;

  @Column({ type: 'varchar', length: 30 })
  estado_proceso!: string;

  @Column({ type: 'timestamp', nullable: true })
  fecha_respuesta?: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  verificacion_ficha?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  resultado_verificacion_sgva?: string;

  @Column({ type: 'timestamp', nullable: true })
  fecha_verificacion?: Date;

  @Column({ type: 'varchar', length: 300, nullable: true })
  ruta_formato?: string;

  @Column({ type: 'timestamp', nullable: true })
  fecha_revision?: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_migracion_sgva?: Date;

  @Column({ type: 'varchar', length: 300, nullable: true })
  observaciones?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
