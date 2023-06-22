import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType()
export class PostInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  title: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field(() => String)
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  authorId: string;
}
