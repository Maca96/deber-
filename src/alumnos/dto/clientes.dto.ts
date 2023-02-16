import { IsDate, IsEmail, IsNotEmpty, IsString, Max, Min } from "class-validator";

export class clientesDTO{
    @IsNotEmpty()
   
    @IsString()
    Cedula:string;
    @IsNotEmpty()
    @IsString()
    Nombre:string;
    @IsNotEmpty()
    @IsString()
    Apellido:string;
    @IsNotEmpty()
    @IsString()
    direccion:string;
    @IsNotEmpty()
    @IsEmail()
    Email:string;

}