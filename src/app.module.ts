import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: true, // if it works dont' touch it
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: (err) => {
        const { originalError } = err.extensions;

        return {
          message: err.message,
          originalError,
        };
      },
    }),
    UserModule,
    PrismaModule,
    PostModule,
    AuthModule,
  ],
})
export class AppModule {}
