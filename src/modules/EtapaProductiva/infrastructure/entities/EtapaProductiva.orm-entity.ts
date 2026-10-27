import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { SeleccionEpOrmEntity } from 'src/modules/SeleccionEp/infrastructure/entities/SeleccionEp.orm-entity';

@Entity('EtapaProductiva')
export class EtapaProductivaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_etapaproductiva!: string;

  @Column({ type: 'uuid', unique: true })
  seleccion_ep_id_FK!: string;

  @OneToOne(()=>SeleccionEpOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'seleccion_ep_id_FK'})
  seleccion_ep?:SeleccionEpOrmEntity

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
