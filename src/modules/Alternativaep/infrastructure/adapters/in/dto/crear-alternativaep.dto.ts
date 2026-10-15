import { IsNotEmpty, IsString } from 'class-validator';

export class crearAlternativaepDto {
  
  @IsString()
  @IsNotEmpty()
  categoria_id_FK!:string

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  texto_sofia!: string;
}
