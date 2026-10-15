import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Alternativaep')
export class AlternativaepOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_alternativaep!: string;

  @Column('uuid')
  categoria_ep_id_FK!: string;

  @Column({ type:'varchar',length: 100 })
  nombre!: string;

  @Column({ type:'varchar',length: 200 })
  texto_sofia!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
