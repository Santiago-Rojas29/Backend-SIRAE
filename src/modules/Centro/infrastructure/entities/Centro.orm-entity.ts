import { RegionalOrmEntity } from 'src/modules/Regional/infrastructure/entities/Regional.orm-entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('Centro')
export class CentroOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_centro!: string;

  @Column('uuid')
  regional_id_FK!:string

  @ManyToOne(()=>RegionalOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'regional_id_FK'})
  regional?:RegionalOrmEntity

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  codigo!: string;

  @Column({length:100})
  direccion!:string

  @Column({length:100})
  municipio!:string

  @Column({length:100})
  departamento!:string

  @Column({length:20})
  telefono!:string

  @Column({length:100})
  correo!:string




  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
