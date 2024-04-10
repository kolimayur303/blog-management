import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { UserRole } from '../../shared/enums/role.enum';

// Injectable decorator marks the class as injectable and allows NestJS to inject dependencies
@Injectable()
// Define a class called UserRoleValidationPipe which implements the PipeTransform interface
export class UserRoleValidationPipe implements PipeTransform {
    // Implementation of the transform method required by the PipeTransform interface
    transform(value: any, metadata: ArgumentMetadata) {
        // Check if the 'role' property of the input value is a valid UserRole enum value
        if (!(value.role in UserRole)) {
            // If not valid, throw a BadRequestException indicating that the role is not valid
            throw new BadRequestException(`${value.role} is not a valid role`)
        }
        // If valid, return the value unchanged
        return value;
    }
}
