import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class crearSeleccionEpDto {
  @IsUUID()
  @IsNotEmpty()
  matricula_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  alternativa_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  alternativa_original_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  estado_proceso!: string;

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
