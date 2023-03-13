import { AfterLoad, BaseEntity } from 'typeorm';
import { Exclude, instanceToPlain } from 'class-transformer';

export class AbstractEntity extends BaseEntity {
  @Exclude({ toPlainOnly: true })
  __entity?: string;

  @AfterLoad()
  setEntityName() {
    this.__entity = this.constructor.name;
  }

  toJSON() {
    return instanceToPlain(this);
  }
}
