import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class crearCompetenciaDto {
  @IsUUID()
  @IsNotEmpty()
  programa_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  codigo!: string;

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsBoolean()
  @IsNotEmpty()
  es_etapa_productiva!: boolean;
}
