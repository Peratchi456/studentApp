import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Student {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property()
  dob!: Date;

  @Property()
  age!: number;

  @Property()
  createdUsername!: string;

  @Property()
  updatedUsername!: string;

  @Property()
  subject1!: string;

  @Property()
  mark1!: number;

  @Property()
  subject2!: string;

  @Property()
  mark2!: number;
}
