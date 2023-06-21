import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthInput } from './auth.validator';
import { Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';
const saltOrRounds = 10;
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(data: AuthInput) {
    try {
      const hashPassword = await bcrypt.hash(data.password, saltOrRounds);

      const user = await this.prisma.user.create({
        data: { ...data, password: hashPassword },
      });
      return user;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error(`user named ${data.email} already exists`);
        }
      }
      throw new Error(e);
    }
  }

  async signIn(email: string, pass: string): Promise<{ accessToken: string }> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { id: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload, {
      secret: 'random',
      expiresIn: '1d',
    });
    return {
      accessToken: token,
    };
  }
}
