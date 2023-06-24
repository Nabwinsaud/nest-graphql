import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/enum';
export const HasRoles = (roles: Roles[]) => SetMetadata('roles', roles);
