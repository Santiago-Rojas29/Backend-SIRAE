import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { EstadoRegistroNovedad } from '../../domain/entities/Novedad.entity';

@Entity('Novedad')
export class NovedadOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_novedad!: string;

  @Column('uuid')
  matricula_id_FK!: string;

  @Column('uuid')
  tipo_novedad_id_FK!: string;

  @Column({ type: 'uuid', nullable: true })
  resolucion_id_FK?: string;

  @Column({ type: 'date' })
  fecha_novedad!: Date;

  @Column({ type: 'boolean', default: false })
  solicitud_respondida!: boolean;

  @Column({ type: 'varchar', length: 30, enum: EstadoRegistroNovedad, default: EstadoRegistroNovedad.Pendiente })
  estado_registro!: EstadoRegistroNovedad;

  @Column({ type: 'timestamp', nullable: true })
  fecha_registro_sofia?: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  verificacion?: string;

  @Column({ type: 'text', nullable: true })
  observaciones?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
