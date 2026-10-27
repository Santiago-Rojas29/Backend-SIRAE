import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UsuarioOrmEntity } from 'src/modules/Usuario/infrastructure/entities/Usuario.orm-entity';
import { RolOrmEntity } from 'src/modules/Rol/infrastructure/entities/Rol.orm-entity';

@Entity('UsuarioRol')
export class UsuarioRolOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_usuariorol!: string;

  @Column('uuid')
  usuario_id_FK!: string;

  @ManyToOne(()=>UsuarioOrmEntity,{onDelete:'CASCADE'})
  @JoinColumn({name:'usuario_id_FK'})
  usuario?:UsuarioOrmEntity

  @Column('uuid')
  rol_id_FK!: string;

  @ManyToOne(()=>RolOrmEntity,{onDelete:'CASCADE'})
  @JoinColumn({name:'rol_id_FK'})
  rol?:RolOrmEntity

  @CreateDateColumn()
  created_at!: Date;
}
