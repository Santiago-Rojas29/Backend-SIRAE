import { IsDateString, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class actualizarResolucionDto {
  @IsString()
  @MaxLength(20)
  @IsOptional()
  numero?: string;

  @IsInt()
  @IsOptional()
  anio?: number;

  @IsDateString()
  @IsOptional()
  fecha?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  tipo?: string;

  @IsString()
  @IsOptional()
  observaciones?: string;
}
