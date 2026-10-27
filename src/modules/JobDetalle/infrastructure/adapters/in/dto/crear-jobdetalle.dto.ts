import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class crearJobDetalleDto {
  @IsUUID()
  @IsNotEmpty()
  job_ejecution_id_FK!: string;

  @IsUUID()
  @IsOptional()
  matricula_id_FK?: string;

  @IsUUID()
  @IsOptional()
  ficha_id_FK?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  referencia!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  resultado!: string;

  @IsString()
  @IsNotEmpty()
  mensaje!: string;
}
