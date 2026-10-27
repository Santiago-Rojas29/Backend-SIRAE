import { IsDateString, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class actualizarSeleccionEpDto {
  @IsString()
  @MaxLength(30)
  @IsOptional()
  estado_proceso?: string;

  @IsUUID()
  @IsOptional()
  alternativa_original_id_FK?: string;

  @IsDateString()
  @IsOptional()
  fecha_respuesta?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  verificacion_ficha?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  resultado_verificacion_sgva?: string;

  @IsDateString()
  @IsOptional()
  fecha_verificacion?: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  ruta_formato?: string;

  @IsDateString()
  @IsOptional()
  fecha_revision?: string;

  @IsDateString()
  @IsOptional()
  fecha_migracion_sgva?: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  observaciones?: string;
}
