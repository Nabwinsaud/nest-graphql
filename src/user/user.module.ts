import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
// import { UsersService } from './user.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from './user.service';

@Module({
  // imports: [PrismaService],
  providers: [UserResolver, UsersService],
  // controllers: [UserResolver],
  exports: [UsersService],
})
export class UserModule {}
