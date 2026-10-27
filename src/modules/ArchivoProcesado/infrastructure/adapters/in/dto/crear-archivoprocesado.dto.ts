import { IsDateString, IsInt, IsNotEmpty, IsNumberString, IsString, IsUUID, MaxLength } from 'class-validator';

export class crearArchivoProcesadoDto {
  @IsUUID()
  @IsNotEmpty()
  job_ejecution_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  nombre_archivo!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  ruta!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  tipo!: string;

  @IsInt()
  tipo_reporte!: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  hash_archivo!: string;

  @IsNumberString()
  tamanio!: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_procesamiento!: string;
}
