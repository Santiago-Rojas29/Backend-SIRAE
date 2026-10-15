import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Empresa')
export class EmpresaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_empresa!: string;

  @Column({type:'varchar', length:50})
  nit!:string

  @Column({ type:'varchar',length: 200 })
  razon_social!: string;

  @Column({ type:'varchar' ,length: 100 })
  direccion!: string;

  @Column({type:'varchar', length:15})
  telefono!:string;

  @Column({type:'varchar', length:50})
  correo!:string;

  @Column({type:'varchar', length:50})
  ciudad!:string;

  @Column({type:'varchar', length:50})
  departamento!:string

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
