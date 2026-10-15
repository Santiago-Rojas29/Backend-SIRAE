import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('EtapaProductiva')
export class EtapaProductivaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_etapaproductiva!: string;

  @Column('uuid')
  seleccion_ep_id_FK!: string;

  @Column({ type: 'date' })
  fecha_inicio!: Date;

  @Column({ type: 'date' })
  fecha_fin!: Date;

  @Column({ type: 'varchar', length: 50 })
  estado!: string;

  @Column({ type: 'varchar', length: 200 })
  ente_cooformador!: string;

  @Column({ type: 'varchar', length: 100 })
  coordinador_academico!: string;

  @Column({ type: 'varchar', length: 100 })
  instructor_seguimiento!: string;

  @Column({ type: 'date', nullable: true })
  fecha_remision_subdirector?: Date;

  @Column({ type: 'timestamp', nullable: true })
  fecha_registro_sofia?: Date;

  @Column({ type: 'varchar', length: 300, nullable: true })
  observaciones?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
