import { IsNotEmpty, IsString } from 'class-validator';

export class crearCredencialesDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  codigo!: string;
}
