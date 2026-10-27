import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { EstadoRegistroNovedad } from '../../domain/entities/Novedad.entity';
import { MatriculaOrmEntity } from 'src/modules/Matricula/infrastructure/entities/Matricula.orm-entity';
import { TipoNovedadOrmEntity } from 'src/modules/TipoNovedad/infrastructure/entities/TipoNovedad.orm-entity';
import { ResolucionOrmEntity } from 'src/modules/Resolucion/infrastructure/entities/Resolucion.orm-entity';

@Entity('Novedad')
export class NovedadOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_novedad!: string;

  @Column('uuid')
  matricula_id_FK!: string;

  @ManyToOne(()=>MatriculaOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'matricula_id_FK'})
  matricula?:MatriculaOrmEntity

  @Column('uuid')
  tipo_novedad_id_FK!: string;

  @ManyToOne(()=>TipoNovedadOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'tipo_novedad_id_FK'})
  tipo_novedad?:TipoNovedadOrmEntity

  @Column({ type: 'uuid', nullable: true })
  resolucion_id_FK?: string;

  @ManyToOne(()=>ResolucionOrmEntity,{onDelete:'SET NULL'})
  @JoinColumn({name:'resolucion_id_FK'})
  resolucion?:ResolucionOrmEntity

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
