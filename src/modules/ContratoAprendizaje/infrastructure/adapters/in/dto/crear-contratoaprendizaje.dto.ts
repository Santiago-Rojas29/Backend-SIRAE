import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class crearContratoAprendizajeDto {
  @IsUUID()
  @IsNotEmpty()
  etapa_productiva_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  empresa_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  numero_contrato!: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_inicio!: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_fin!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  estado!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  nit_eps!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre_eps!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  nit_arl!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  nombre_arl!: string;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  contrato_cedido_a?: string;

  @IsDateString()
  @IsOptional()
  fecha_registro_sgva?: string;
}
