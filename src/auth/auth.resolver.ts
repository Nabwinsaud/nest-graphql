import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserSignupSchema } from './auth.schema';
import { AuthInput } from './auth.validator';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Mutation(() => UserSignupSchema)
  async signUp(@Args('data') data: AuthInput) {
    return this.authService.signUp(data);
  }
}
