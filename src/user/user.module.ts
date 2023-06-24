import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
// import { UsersService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [UserResolver, UsersService, PrismaService],
  exports: [UsersService],
})
export class UserModule {}
