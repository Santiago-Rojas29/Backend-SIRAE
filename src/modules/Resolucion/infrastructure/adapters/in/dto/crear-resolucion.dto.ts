import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class crearResolucionDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  numero!: string;

  @IsInt()
  @IsNotEmpty()
  anio!: number;

  @IsDateString()
  @IsNotEmpty()
  fecha!: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  tipo?: string;

  @IsString()
  @IsOptional()
  observaciones?: string;
}
