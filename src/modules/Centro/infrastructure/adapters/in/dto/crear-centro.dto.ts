import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class crearCentroDto {

  @IsString()
  @IsNotEmpty()
  regional_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  codigo!: string;

  @IsString()
  @IsNotEmpty()
  direccion!: string;

  @IsString()
  @IsNotEmpty()
  municipio!: string;

  @IsString()
  @IsNotEmpty()
  departamento!: string;

  @IsPhoneNumber()
  telefono!: string;

  @IsEmail()
  correo!: string;


}
