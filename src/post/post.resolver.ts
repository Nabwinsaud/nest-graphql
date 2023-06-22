import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostInput } from './post.validator';
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { PostsSchema } from './post.schema';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}
  @UsePipes(ValidationPipe)
  @UseGuards()
  @Mutation(() => PostsSchema)
  async createPost(@Args('data') data: PostInput) {
    const res = await this.postService.create(data);
    return res;
  }
}
