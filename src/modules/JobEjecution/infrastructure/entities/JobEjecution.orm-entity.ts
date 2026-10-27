import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UsuarioOrmEntity } from 'src/modules/Usuario/infrastructure/entities/Usuario.orm-entity';
import { CredencialesOrmEntity } from 'src/modules/Credenciales/infrastructure/entities/Credenciales.orm-entity';

@Entity('JobEjecution')
export class JobEjecutionOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_jobejecution!: string;

  @Column('uuid')
  usuario_id_FK!: string;

  @ManyToOne(()=>UsuarioOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'usuario_id_FK'})
  usuario?:UsuarioOrmEntity

  @Column('uuid')
  credencial_id_FK!: string;

  @ManyToOne(()=>CredencialesOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'credencial_id_FK'})
  credencial?:CredencialesOrmEntity

  @Column({ type: 'varchar', length: 50 })
  tipo!: string;

  @Column({ type: 'varchar', length: 100 })
  disparado_por!: string;

  @Column({ type: 'varchar', length: 30 })
  estado!: string;

  @Column({ type: 'timestamp' })
  fecha_incio!: Date;

  @Column({ type: 'int', default: 0 })
  total_items!: number;

  @Column({ type: 'int', default: 0 })
  items_procesados!: number;

  @Column({ type: 'timestamp', nullable: true })
  fecha_fin?: Date;

  @Column({ type: 'text', nullable: true })
  errores?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
