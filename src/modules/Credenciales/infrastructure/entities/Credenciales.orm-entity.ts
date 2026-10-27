import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { EstadoCredencial } from '../../domain/entities/Credenciales.entity';
import { CentroOrmEntity } from 'src/modules/Centro/infrastructure/entities/Centro.orm-entity';
import { TipocredencialOrmEntity } from 'src/modules/Tipocredencial/infrastructure/entities/Tipocredencial.orm-entity';

@Entity('Credenciales')
@Unique(['centro_id_FK', 'tipo_credenciales_id_FK'])
export class CredencialesOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_credenciales!: string;

  @Column('uuid')
  centro_id_FK!: string;

  @ManyToOne(()=>CentroOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'centro_id_FK'})
  centro?:CentroOrmEntity

  @Column('uuid')
  tipo_credenciales_id_FK!: string;

  @ManyToOne(()=>TipocredencialOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'tipo_credenciales_id_FK'})
  tipo_credencial?:TipocredencialOrmEntity

  @Column({ type: 'text' })
  datos_encryptados!: string;

  @Column({ type: 'varchar', length: 100 })
  iv!: string;

  @Column({ type: 'varchar', length: 100 })
  auth_tag!: string;

  @Column({ type: 'varchar', length: 20, enum: EstadoCredencial, default: EstadoCredencial.ACTIVA })
  estado!: EstadoCredencial;

  @Column({ type: 'text', nullable: true })
  observacion_verificacion?: string;

  @Column({ type: 'timestamp' })
  fecha_verificación!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
