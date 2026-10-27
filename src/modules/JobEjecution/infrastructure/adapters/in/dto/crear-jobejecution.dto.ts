import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, Min, MaxLength } from 'class-validator';

export class crearJobEjecutionDto {
  @IsUUID()
  @IsNotEmpty()
  usuario_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  credencial_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  tipo!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  disparado_por!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  estado!: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_incio!: string;

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
