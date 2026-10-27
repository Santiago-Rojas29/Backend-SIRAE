import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CategoriaEpOrmEntity } from 'src/modules/CategoriaEp/infrastructure/entities/CategoriaEp.orm-entity';

@Entity('Alternativaep')
export class AlternativaepOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id_alternativaep!: string;

  @Column('uuid')
  categoria_ep_id_FK!: string;

  @ManyToOne(()=>CategoriaEpOrmEntity,{onDelete:'RESTRICT'})
  @JoinColumn({name:'categoria_ep_id_FK'})
  categoria_ep?:CategoriaEpOrmEntity

  @Column({ type:'varchar',length: 100 })
  nombre!: string;

  @Column({ type:'varchar',length: 200 })
  texto_sofia!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
