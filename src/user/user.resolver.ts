import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserSchema } from './user.schema';
import { Roles } from 'src/enum';
import { HasRoles } from 'src/auth/roles.decorator';
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

  @HasRoles([Roles.ADMIN])
  // @UseGuards(AuthGu)
  @Query(() => UserSchema)
  getUserSchema(): UserSchema {
    return {
      id: 'random id',
      name: 'John',
      age: 20,
    };
  }

  // @Mutation(() => String)
  // createUser(@Args("data") data:) {}
}
