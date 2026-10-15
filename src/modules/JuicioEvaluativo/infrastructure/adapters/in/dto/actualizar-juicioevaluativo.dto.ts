import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class actualizarJuicioEvaluativoDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  calificacion?: string;

  @IsDateString()
  @IsNotEmpty()
  @IsOptional()
  fecha_hora?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  funcionario?: string;
}
