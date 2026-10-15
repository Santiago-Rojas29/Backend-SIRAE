import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarCompetenciaDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  codigo?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsBoolean()
  @IsOptional()
  es_etapa_productiva?: boolean;
}
