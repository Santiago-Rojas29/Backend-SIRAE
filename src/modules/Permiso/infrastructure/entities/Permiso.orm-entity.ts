import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Permiso')
export class PermisoOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_permiso!: string;

  @Column({ type: 'varchar', length: 100 })
  modulo!: string;

  @Column({ type: 'varchar', length: 100 })
  accion!: string;

  @Column({ type: 'varchar', length: 255 })
  descripcion!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
