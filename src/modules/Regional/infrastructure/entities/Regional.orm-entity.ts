import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Regional')
export class RegionalOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_regional!: string;

  @Column({length: 100})
  nombre!: string;

  @Column({length: 100})
  codigo!:string;

  @CreateDateColumn()
  created_at!:Date;

  @UpdateDateColumn()
  updated_at!:Date;
}
