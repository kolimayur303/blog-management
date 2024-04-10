import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// Injectable decorator marks the class as injectable and allows NestJS to inject dependencies
@Injectable()
// Define a class called RolesGuard which implements the CanActivate interface
export class RolesGuard implements CanActivate {
    // Constructor to inject dependencies, in this case, Reflector
    constructor(private readonly reflector: Reflector) {}

    // Implementation of the canActivate method required by the CanActivate interface
    canActivate(context: ExecutionContext): boolean {
        // Retrieve the roles metadata attached to the handler method
        const roles = this.reflector.get<string[]>('roles', context.getHandler());

        // If no roles are specified, allow access
        if (!roles) {
            return true;
        }

        // Retrieve the 'user' object from the request
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        // Check if the user has any of the required roles
        return roles.some((role) => {
            return role === user.role;
        });
    }
}
