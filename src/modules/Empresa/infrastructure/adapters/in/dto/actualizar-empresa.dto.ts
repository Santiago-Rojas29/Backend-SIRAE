import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MaxLength } from 'class-validator';

export class actualizarEmpresaDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(15)
  nit!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  razon_social!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  direccion!:string

  @IsPhoneNumber()
  @IsNotEmpty()
  @IsOptional()
  telefono!:string

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  correo!:string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  ciudad!:string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  departamento!:string


}
