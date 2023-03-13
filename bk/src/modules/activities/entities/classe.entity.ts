import {
  Column,
  Entity, Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { AbstractEntity } from '@shared/helpers/abstract-entity';
import { Activity } from '@modules/activities/entities/activity.entity';
import { Division } from '@modules/activities/entities/division.entity';

@Entity()
export class Classe extends AbstractEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(() => Division, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'division_id', referencedColumnName: 'id' })
  @Index()
  division: Division;

  @Column()
  public code!: string;

  @Column()
  public name!: string;
}
