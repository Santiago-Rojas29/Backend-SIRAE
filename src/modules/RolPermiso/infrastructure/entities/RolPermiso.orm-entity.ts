import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('RolPermiso')
export class RolPermisoOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_rolpermiso!: string;

  @Column('uuid')
  rol_id_FK!: string;

  @Column('uuid')
  permiso_id_FK!: string;

  @CreateDateColumn()
  created_at!: Date;
}
