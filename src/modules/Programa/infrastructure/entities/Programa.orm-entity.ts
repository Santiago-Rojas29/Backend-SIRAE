import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Programa')
export class ProgramaOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_programa!: string;

  @Column({ type: 'varchar', length: 100 })
  codigo!: string;

  @Column({ type: 'varchar', length: 50 })
  version!: string;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'varchar', length: 100 })
  nivel_formacion!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
