import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class crearResultadoaprendizajeDto {
  @IsUUID()
  @IsNotEmpty()
  competencia_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  codigo!: string;
}
