import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { RolOrmEntity } from 'src/modules/Rol/infrastructure/entities/Rol.orm-entity';
import { PermisoOrmEntity } from 'src/modules/Permiso/infrastructure/entities/Permiso.orm-entity';

@Entity('RolPermiso')
export class RolPermisoOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_rolpermiso!: string;

  @Column('uuid')
  rol_id_FK!: string;

  @ManyToOne(()=>RolOrmEntity,{onDelete:'CASCADE'})
  @JoinColumn({name:'rol_id_FK'})
  rol?:RolOrmEntity

  @Column('uuid')
  permiso_id_FK!: string;

  @ManyToOne(()=>PermisoOrmEntity,{onDelete:'CASCADE'})
  @JoinColumn({name:'permiso_id_FK'})
  permiso?:PermisoOrmEntity

  @CreateDateColumn()
  created_at!: Date;
}
