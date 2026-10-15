import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class crearJuicioEvaluativoDto {
  @IsUUID()
  @IsNotEmpty()
  matricula_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  resultado_aprendizaje_id_FK!: string;

  @IsString()
  @IsNotEmpty()
  calificacion!: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_hora!: string;

  @IsString()
  @IsNotEmpty()
  funcionario!: string;
}
