import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('TipoNovedad')
export class TipoNovedadOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_tiponovedad!: string;

  @Column({ type: 'varchar', length: 100 })
  codigo!: string;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'varchar', length: 255 })
  descripcion!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
