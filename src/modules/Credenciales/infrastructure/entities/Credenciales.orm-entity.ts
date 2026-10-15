import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Credenciales')
export class CredencialesOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_credenciales!: string;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 100 })
  codigo!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
