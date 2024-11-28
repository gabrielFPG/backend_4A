import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty({description: 'Nombre de usuario'})
    @IsString({message:'El nombre debe ser caracteres'})
    @IsNotEmpty({message:'El nombre no debe estar vacio'})
    name: string;

    @ApiProperty({description: 'correo electronico'})
    @IsString({message:'El formato debe ser correo'})
    @IsNotEmpty({message:'El correo no debe estar vacio'})
    email: string;

    @ApiProperty({description: 'Contraseña de usuario'})
    @IsString({message:'La contraseña debe tener minimo 6 digitos'})
    @IsNotEmpty({message:'La contraseña debe ser una cadena'})
    password: string;
}