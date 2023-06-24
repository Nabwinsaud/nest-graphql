import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostService } from './post.service';
import { UsersService } from 'src/user/user.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { UserModule } from 'src/user/user.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [PostResolver, PostService, AuthGuard, JwtService],
})
export class PostModule {}
