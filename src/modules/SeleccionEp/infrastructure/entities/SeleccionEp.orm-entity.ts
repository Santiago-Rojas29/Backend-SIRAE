import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MatriculaOrmEntity } from 'src/modules/Matricula/infrastructure/entities/Matricula.orm-entity';
import { AlternativaepOrmEntity } from 'src/modules/Alternativaep/infrastructure/entities/Alternativaep.orm-entity';

@Entity('SeleccionEp')
export class SeleccionEpOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_seleccionep!: string;

  @Column('uuid')
  matricula_id_FK!: string;

  @ManyToOne(()=>MatriculaOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'matricula_id_FK'})
  matricula?:MatriculaOrmEntity

  @Column('uuid')
  alternativa_id_FK!: string;

  @ManyToOne(()=>AlternativaepOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'alternativa_id_FK'})
  alternativa?:AlternativaepOrmEntity

  @Column({ type: 'uuid', nullable: true })
  alternativa_original_id_FK!: string | null;

  @ManyToOne(()=>AlternativaepOrmEntity,{onDelete:'SET NULL'})
  @JoinColumn({name:'alternativa_original_id_FK'})
  alternativa_original?:AlternativaepOrmEntity | null

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
