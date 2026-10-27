import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { EstadoUsuario, TipoDocumento, TipoUsuario } from '../../domain/entities/Usuario.entity';
import { CentroOrmEntity } from 'src/modules/Centro/infrastructure/entities/Centro.orm-entity';

@Entity('Usuario')
export class UsuarioOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_usuario!: string;

  @Column('uuid')
  centro_id_FK!:string

  @ManyToOne(()=>CentroOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'centro_id_FK'})
  centro?:CentroOrmEntity

  @Column({ type:'varchar',length: 100 })
  nombre!: string;

  @Column({ type:'varchar' ,length: 100 })
  correo!: string;

  @Column({type:'varchar', length:100})
  password!:string

  @Column({type:'enum', enum:TipoUsuario})
  tipo_usuario!:TipoUsuario

  @Column({type:'enum', enum:EstadoUsuario})
  estado_usuario!:EstadoUsuario

  @Column({type:'varchar', length:20})
  numero_documento!:string

  @Column({type:'enum', enum:TipoDocumento})
  tipo_documento!:TipoDocumento

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
