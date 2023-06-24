import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthToken, UserSignupSchema } from './auth.schema';
import { AuthInput, LoginInput } from './auth.validator';
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './guard/auth.guard';
import { User } from '@prisma/client';

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
  // @UseGuards(AuthGuard)
  async login(
    @Args('data') data: LoginInput,
    @Context('user') user: User,
  ): Promise<{ accessToken: string }> {
    console.log('user is', user);
    return await this.authService.signIn(data.email, data.password);
  }
}
