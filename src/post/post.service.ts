import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostInput } from './post.validator';
import { Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private readonly prismaService: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async create(data: PostInput): Promise<Post> {
    const user = await this.prismaService.user.findUnique({
      where: { id: data.authorId },
    });
    if (!user) throw new Error('User not found');
    const res = await this.prismaService.post.create({
      data: {
        title: data.title,
        description: data.description,
        User: {
          connect: {
            id: data.authorId,
          },
        },
      },
    });
    return res;
  }
}
