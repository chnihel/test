import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fullname: string
    @IsNotEmpty()
    @IsString()
    email: string
    @IsString()
    @IsNotEmpty()
    password: string
    @IsNumber()
    @IsNotEmpty()
    phone: number
    refreshToken: string
    fcmToken:string
}
