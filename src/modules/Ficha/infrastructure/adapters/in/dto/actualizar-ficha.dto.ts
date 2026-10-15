import { IsDateString, IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { OrigenFicha } from '../../../../domain/entities/Ficha.entity';

export class actualizarFichaDto {
  @IsString()
  @MaxLength(20)
  @IsOptional()
  numero?: string;

  @IsEnum(OrigenFicha)
  @IsOptional()
  origen?: OrigenFicha;

  @IsDateString()
  @IsOptional()
  fecha_inicio?: string;

  @IsDateString()
  @IsOptional()
  fecha_fin?: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  estado?: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  modalidad?: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  codigo_programa_especial?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  programa_especial?: string;

  @IsInt()
  @IsOptional()
  duracion_productiva_meses?: number;
}
