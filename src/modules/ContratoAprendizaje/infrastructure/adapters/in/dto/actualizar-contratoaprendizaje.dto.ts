import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';

export class actualizarContratoAprendizajeDto {
  @IsString()
  @MaxLength(20)
  @IsOptional()
  numero_contrato?: string;

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
  @MaxLength(20)
  @IsOptional()
  nit_eps?: string;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  nombre_eps?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  nit_arl?: string;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  nombre_arl?: string;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  contrato_cedido_a?: string;

  @IsDateString()
  @IsOptional()
  fecha_registro_sgva?: string;
}
