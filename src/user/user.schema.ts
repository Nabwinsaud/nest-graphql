import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserSchema {
  @Field({ nullable: true })
  id: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  age: number;
}
