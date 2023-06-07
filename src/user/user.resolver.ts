import { Query, Resolver } from '@nestjs/graphql';
import { UserSchema } from './user.schema';
@Resolver(() => UserSchema)
export class UserResolver {
  @Query(() => String)
  getUser() {
    return 'Hello world';
  }

  @Query(() => String)
  greet() {
    return 'Hello world typescript';
  }

  @Query(() => UserSchema)
  getUserSchema(): UserSchema {
    return {
      id: 'random id',
      name: 'John',
      age: 20,
    };
  }
}
