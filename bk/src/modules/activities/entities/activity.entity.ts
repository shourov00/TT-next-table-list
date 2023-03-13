import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from '@shared/helpers/abstract-entity';
import { Division } from '@modules/activities/entities/division.entity';

@Entity()
export class Activity extends AbstractEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  public id!: number;

  @ApiProperty()
  @Column()
  public code!: string;

  @ApiProperty()
  @Column()
  public name!: string;

  @OneToMany(() => Division, (division) => division.activity)
  divisions: Division[];
}
