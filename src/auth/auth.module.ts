import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [AuthService, AuthResolver, JwtService],
})
export class AuthModule {}
