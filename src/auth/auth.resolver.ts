import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthToken, UserSignupSchema } from './auth.schema';
import { AuthInput, LoginInput } from './auth.validator';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Mutation(() => UserSignupSchema)
  async register(@Args('data') data: AuthInput) {
    return this.authService.signUp(data);
  }

  @UsePipes(ValidationPipe)
  @Mutation(() => AuthToken)
  async login(
    @Args('data') data: LoginInput,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signIn(data.email, data.password);
  }
}
