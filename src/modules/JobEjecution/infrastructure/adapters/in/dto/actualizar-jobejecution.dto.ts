import { IsDateString, IsInt, IsOptional, IsString, Min, MaxLength } from 'class-validator';

export class actualizarJobEjecutionDto {
  @IsString()
  @MaxLength(30)
  @IsOptional()
  estado?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  total_items?: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  items_procesados?: number;

  @IsDateString()
  @IsOptional()
  fecha_fin?: string;

  @IsString()
  @IsOptional()
  errores?: string;
}
