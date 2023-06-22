import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostsSchema {
  @Field(() => String, { nullable: true })
  id: string;
  @Field(() => String, { nullable: true })
  title: string;
  @Field(() => String, { nullable: true })
  description: string;
}
