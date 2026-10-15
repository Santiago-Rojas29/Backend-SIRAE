import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class actualizarMatriculaDto {
  @IsString()
  @MaxLength(50)
  @IsOptional()
  estado?: string;

  @IsDateString()
  @IsOptional()
  fecha_inicio?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  estado_sgva?: string;

  @IsInt()
  @IsOptional()
  cantidad_contratos_sgva?: number;

  @IsDateString()
  @IsOptional()
  fecha_actualizacion_sgva?: string;
}
