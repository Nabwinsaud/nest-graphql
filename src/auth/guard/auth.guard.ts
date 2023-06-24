import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UsersService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    // *  console.log('ctx is', ctx.req.body.variables.data);

    // for authorization header
    const authHeader = ctx.req.headers.authorization;

    // console.log('authHeader', authHeader);
    // console.log('authHeader 1', authHeader1);
    // const { email, password }: Record<string, string> =
    //   ctx.req.body.variables.data;
    // const user = await this.userService.findOne(email);
    // const isPasswordMatched = await bcrypt.compare(password, user.password);
    // if (user.email && isPasswordMatched) {
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      const user = await this.jwtService.verify(token, { secret: 'random' });
      // console.log('user in auth guard', user);
      ctx.user = user;
      return true;
      // return user;
    } else {
      throw new HttpException('UnAuthorized', HttpStatus.UNAUTHORIZED);
    }
  }
}
