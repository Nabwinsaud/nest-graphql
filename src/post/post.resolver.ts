import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { PostInput } from './post.validator';
import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { PostsSchema } from './post.schema';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/enum';
import { HasRoles } from 'src/auth/roles.decorator';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard, RolesGuard)
  @HasRoles([Roles.USER, Roles.ADMIN])
  @Mutation(() => PostsSchema)
  async createPost(@Context('user') user, @Args('data') data: PostInput) {
    console.log('user in the post is', user);
    const res = await this.postService.create(data);
    return res;
  }
}
