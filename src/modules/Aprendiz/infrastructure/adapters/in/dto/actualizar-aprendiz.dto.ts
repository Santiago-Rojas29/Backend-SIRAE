import { IsDateString, IsEmail, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { TipoDocumento, Genero } from '../../../../domain/entities/Aprendiz.entity';

export class actualizarAprendizDto {
  @IsEnum(TipoDocumento)
  @IsOptional()
  tipo_documento?: TipoDocumento;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  numero_documento?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  nombre?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  apellidos?: string;

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
