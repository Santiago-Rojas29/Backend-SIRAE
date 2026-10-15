import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class crearEmpresaDto {
  @IsString()
  @IsNotEmpty()
  nit!: string;

  @IsString()
  @IsNotEmpty()
  razon_social!: string;

  @IsString()
  @IsNotEmpty()
  direccion!:string

  @IsPhoneNumber()
  @IsNotEmpty()
  telefono!:string

  @IsEmail()
  @IsNotEmpty()
  correo!:string

  @IsString()
  @IsNotEmpty()
  ciudad!:string

  @IsString()
  @IsNotEmpty()
  departamento!:string


}
