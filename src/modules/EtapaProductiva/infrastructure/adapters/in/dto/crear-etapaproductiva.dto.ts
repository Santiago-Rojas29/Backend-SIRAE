import { IsDateString, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class crearEtapaProductivaDto {
  @IsUUID()
  @IsNotEmpty()
  seleccion_ep_id_FK!: string;

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
  @MaxLength(200)
  ente_cooformador!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  coordinador_academico!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  instructor_seguimiento!: string;

  @IsDateString()
  @IsOptional()
  fecha_remision_subdirector?: string;

  @IsDateString()
  @IsOptional()
  fecha_registro_sofia?: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  observaciones?: string;
}
