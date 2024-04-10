import { SetMetadata } from '@nestjs/common';

// Create a custom decorator called 'Roles' using an arrow function.
// This decorator takes in a variable number of string arguments representing roles.
export const Roles = (...roles: string[]) =>
  // SetMetadata is a function provided by NestJS to attach metadata to methods or controllers.
  // Here, we're attaching metadata with the key 'roles' and the provided roles array as its value.
  SetMetadata('roles', roles);
