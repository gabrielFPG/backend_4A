import { PartialType } from "@nestjs/mapped-types";
import { LoginAutgDto } from "./login-auth.dto";
import { IsNotEmpty } from "class-validator";

export class RegisterAuthDto extends PartialType(LoginAutgDto){
    @IsNotEmpty()
    name: string;

}