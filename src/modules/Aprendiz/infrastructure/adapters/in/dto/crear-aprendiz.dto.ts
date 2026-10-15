import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { TipoDocumento, Genero } from '../../../../domain/entities/Aprendiz.entity';

export class crearAprendizDto {
  @IsEnum(TipoDocumento)
  @IsNotEmpty()
  tipo_documento!: TipoDocumento;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  numero_documento!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  apellidos!: string;

  @IsDateString()
  @IsOptional()
  fecha_nacimiento?: string;

  @IsEnum(Genero)
  @IsOptional()
  genero?: Genero;

  @IsString()
  @MaxLength(5)
  @IsOptional()
  estrato?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  celular?: string;

  @IsEmail()
  @IsOptional()
  correo?: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  direccion?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  municipio?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  discapacidad?: string;
}
