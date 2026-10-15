import { IsNotEmpty, IsString } from 'class-validator';

export class crearProgramaDto {
  @IsString()
  @IsNotEmpty()
  codigo!: string;

  @IsString()
  @IsNotEmpty()
  version!: string;

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  nivel_formacion!: string;
}
