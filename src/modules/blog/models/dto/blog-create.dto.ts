import { IsNotEmpty } from 'class-validator';

export class CreateBlogDto {
    @IsNotEmpty()
    assignee: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    status: string;
}