import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Centro')
export class CentroOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_centro!: string;

  @Column('uuid')
  regional_id_FK!:string

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
