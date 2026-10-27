import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { EtapaProductivaOrmEntity } from 'src/modules/EtapaProductiva/infrastructure/entities/EtapaProductiva.orm-entity';
import { EmpresaOrmEntity } from 'src/modules/Empresa/infrastructure/entities/Empresa.orm-entity';

@Entity('ContratoAprendizaje')
export class ContratoAprendizajeOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_contratoaprendizaje!: string;

  @Column('uuid')
  etapa_productiva_id_FK!: string;

  @ManyToOne(()=>EtapaProductivaOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'etapa_productiva_id_FK'})
  etapa_productiva?:EtapaProductivaOrmEntity

  @Column('uuid')
  empresa_id_FK!: string;

  @ManyToOne(()=>EmpresaOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'empresa_id_FK'})
  empresa?:EmpresaOrmEntity

  @Column({ type: 'varchar', length: 20 })
  numero_contrato!: string;

  @Column({ type: 'date' })
  fecha_inicio!: Date;

  @Column({ type: 'date' })
  fecha_fin!: Date;

  @Column({ type: 'varchar', length: 50 })
  estado!: string;

  @Column({ type: 'varchar', length: 20 })
  nit_eps!: string;

  @Column({ type: 'varchar', length: 200 })
  nombre_eps!: string;

  @Column({ type: 'varchar', length: 20 })
  nit_arl!: string;

  @Column({ type: 'varchar', length: 200 })
  nombre_arl!: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  contrato_cedido_a?: string;

  @Column({ type: 'timestamp', nullable: true })
  fecha_registro_sgva?: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
