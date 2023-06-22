import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// while making global as module we don't need to import this module in other modules
// @Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
