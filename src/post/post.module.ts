import { Module } from '@nestjs/common';
import { PostResolver } from './post.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostService } from './post.service';

@Module({
  imports: [PrismaModule],
  providers: [PostResolver, PostService],
})
export class PostModule {}
