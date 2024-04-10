import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Create a custom param decorator called 'AuthUser' using the 'createParamDecorator' function.
// This decorator extracts the 'user' property from the request object.
export const AuthUser = createParamDecorator(
    // The decorator function takes two parameters:
    // 1. 'data': Represents any additional data that can be passed to the decorator (not used in this case).
    // 2. 'ctx': Represents the ExecutionContext object containing information about the current execution context.
    (data: unknown, ctx: ExecutionContext) => {
        // Extract the 'request' object from the HTTP context using 'switchToHttp()' method.
        const request = ctx.switchToHttp().getRequest();
        
        // Return the 'user' property from the request object.
        return request.user;
    },
);
