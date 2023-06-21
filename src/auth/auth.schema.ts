import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthSchema {
  @Field(() => String)
  accessToken: string;
}

@ObjectType()
class PostSchema {
  @Field(() => String)
  id: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  authorId: string;
}

@ObjectType()
export class UserSignupSchema {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  email: string;

  @Field(() => [PostSchema], { nullable: true })
  post: PostSchema;
}
