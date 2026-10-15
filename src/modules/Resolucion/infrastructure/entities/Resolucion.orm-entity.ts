import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity('Resolucion')
@Unique(['numero', 'anio'])
export class ResolucionOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_resolucion!: string;

  @Column({ type: 'varchar', length: 20 })
  numero!: string;

  @Column({ type: 'int' })
  anio!: number;

  @Column({ type: 'date' })
  fecha!: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  tipo?: string;

  @Column({ type: 'text', nullable: true })
  observaciones?: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
