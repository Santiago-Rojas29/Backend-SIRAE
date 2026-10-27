import { IsDateString, IsInt, IsNotEmpty, IsNumberString, IsOptional, IsString, MaxLength } from 'class-validator';

export class actualizarArchivoProcesadoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @IsOptional()
  nombre_archivo?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  @IsOptional()
  ruta?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  tipo?: string;

  @IsInt()
  @IsOptional()
  tipo_reporte?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  @IsOptional()
  hash_archivo?: string;

  @IsNumberString()
  @IsOptional()
  tamanio?: string;

  @IsDateString()
  @IsOptional()
  fecha_procesamiento?: string;
}
