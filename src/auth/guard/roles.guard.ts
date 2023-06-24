import { Roles } from 'src/enum';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    const requiredRoles = this.reflector.getAllAndOverride<Roles[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    console.log('requiredRoles', requiredRoles);
    console.log('ctx is', ctx.req.body);
    if (!requiredRoles) {
      return true;
    }
    const user = ctx.user;
    console.log('user is', user);
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    const hasRequiredRoles = requiredRoles.some((role) =>
      user.role?.includes(role),
    );
    if (!hasRequiredRoles) {
      throw new HttpException(
        'You are not authorized to perform this operation',
        HttpStatus.UNAUTHORIZED,
      );
    }
    return hasRequiredRoles;
  }
}
