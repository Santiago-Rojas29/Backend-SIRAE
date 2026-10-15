import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';

export class actualizarEtapaProductivaDto {
  @IsDateString()
  @IsOptional()
  fecha_inicio?: string;

  @IsDateString()
  @IsOptional()
  fecha_fin?: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  estado?: string;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  ente_cooformador?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  coordinador_academico?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  instructor_seguimiento?: string;

  @IsDateString()
  @IsOptional()
  fecha_remision_subdirector?: string;

  @IsDateString()
  @IsOptional()
  fecha_registro_sofia?: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  observaciones?: string;
}
