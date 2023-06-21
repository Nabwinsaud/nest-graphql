import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
@ObjectType()
export class UserValidator {
  @Field()
  @IsNotEmpty()
  @IsString()
  name: string;
  @Field()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
