import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AccessToken } from './interface.auth';
import { UsersService } from 'src/user/user.service';
import { AuthInput } from './auth.validator';
@Injectable()
export class AuthService {
  constructor(
    // private jwtService: JwtService,
    private readonly prisma: PrismaService, // private readonly user: UsersService,
    private readonly user: UsersService,
  ) {}

  async signUp(data: AuthInput) {
    const user = await this.prisma.user.create({
      data,
    });
    return user;

    // const payload = { id: data.id, email: data.email };

    // const token = this.jwtService.sign(payload);
    // return {
    //   accessToken: token,
    // };
  }

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.user.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    return result;
  }
}
