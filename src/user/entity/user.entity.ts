import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entity/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
