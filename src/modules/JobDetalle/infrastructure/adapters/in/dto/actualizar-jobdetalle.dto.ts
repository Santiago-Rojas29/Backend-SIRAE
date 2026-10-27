import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class actualizarJobDetalleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @IsOptional()
  referencia?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  resultado?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  mensaje?: string;
}
