import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class crearMatriculaDto {
  @IsUUID()
  @IsNotEmpty()
  aprendiz_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  ficha_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  estado!: string;

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
