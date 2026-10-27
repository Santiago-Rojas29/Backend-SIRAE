import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class loginDto {
  @IsEmail()
  @IsNotEmpty()
  correo!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  contrasena!: string;
}
