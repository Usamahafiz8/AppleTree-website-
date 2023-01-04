import { IsString } from "class-validator";

export class CreateVenderDto {
    @IsString()
    name:string;
    @IsString()
    email:string;
    @IsString()
    password:string;
    @IsString()
    whatsappnumber:string;
}
