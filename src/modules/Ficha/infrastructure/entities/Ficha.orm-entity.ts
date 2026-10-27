import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { OrigenFicha } from '../../domain/entities/Ficha.entity';
import { CentroOrmEntity } from 'src/modules/Centro/infrastructure/entities/Centro.orm-entity';
import { ProgramaOrmEntity } from 'src/modules/Programa/infrastructure/entities/Programa.orm-entity';

@Entity('Ficha')
export class FichaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_ficha!: string;

  @Column('uuid')
  centro_id_FK!: string;

  @ManyToOne(()=>CentroOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'centro_id_FK'})
  centro?:CentroOrmEntity

  @Column('uuid')
  programa_id_FK!: string;

  @ManyToOne(()=>ProgramaOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'programa_id_FK'})
  programa?:ProgramaOrmEntity

  @Column({ type: 'varchar', length: 20, unique: true })
  numero!: string;

  @Column({ type: 'date', nullable: true })
  fecha_inicio?: Date;

  @Column({ type: 'date', nullable: true })
  fecha_fin?: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  estado?: string;

  @Column({ type: 'varchar', length: 20, enum: OrigenFicha, default: OrigenFicha.DF49 })
  origen!: OrigenFicha;

  @Column({ type: 'varchar', length: 50, nullable: true })
  modalidad?: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  codigo_programa_especial?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  programa_especial?: string;

  @Column({ type: 'int', nullable: true })
  duracion_productiva_meses?: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
