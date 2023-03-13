import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AbstractEntity } from '@shared/helpers/abstract-entity';
import { Activity } from '@modules/activities/entities/activity.entity';
import { Classe } from '@modules/activities/entities/classe.entity';

@Entity()
export class Division extends AbstractEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  public id!: number;

  @ManyToOne(() => Activity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'activity_id', referencedColumnName: 'id' })
  @Index()
  activity: Activity;

  @ApiProperty()
  @Column()
  public code!: string;

  @ApiProperty()
  @Column()
  public name!: string;

  @OneToMany(() => Classe, (classe) => classe.division)
  classes: Classe[];
}
