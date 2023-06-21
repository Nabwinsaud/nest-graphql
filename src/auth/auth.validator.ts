import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

@InputType()
export class AuthInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;
  @Field()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
