import { IsEmail, IsNotEmpty } from "class-validator";
import {User} from "../interfaces/user.interface";

export class LoginAutgDto implements User{

    @IsNotEmpty()
    @IsEmail()
    email:string;
    password: string;
}