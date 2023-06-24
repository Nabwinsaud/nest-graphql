import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async findOne(email: string) {
    console.log('email is', email);
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new Error('User not found');
    return user;
  }
}
