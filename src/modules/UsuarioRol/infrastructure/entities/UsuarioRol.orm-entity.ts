import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('UsuarioRol')
export class UsuarioRolOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_usuariorol!: string;

  @Column('uuid')
  usuario_id_FK!: string;

  @Column('uuid')
  rol_id_FK!: string;

  @CreateDateColumn()
  created_at!: Date;
}
