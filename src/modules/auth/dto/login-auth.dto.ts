import { IsEmail, IsNotEmpty, MinLength, MaxLength } from "class-validator";
import {User} from "../interfaces/user.interface";

export class LoginAutgDto implements User{
    
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @MinLength(6)
    @MaxLength(25)
    @IsNotEmpty()
    password: string;
}