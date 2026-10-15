import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class actualizarCentroDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  codigo!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  direccion!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  municipio!: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  departamento!: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @IsOptional()
  telefono!: string;

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  correo!: string;
}


