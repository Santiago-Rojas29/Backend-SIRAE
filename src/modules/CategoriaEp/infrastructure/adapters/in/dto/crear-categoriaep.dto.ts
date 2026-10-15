import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class crearCategoriaEpDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre_sofia!: string;
}
