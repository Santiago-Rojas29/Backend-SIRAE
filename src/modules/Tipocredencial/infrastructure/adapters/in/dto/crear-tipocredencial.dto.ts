import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { TipoPlataforma } from 'src/modules/Tipocredencial/domain/entities/Tipocredencial.entity';

export class crearTipocredencialDto {

  @IsEnum(TipoPlataforma)
  @IsNotEmpty()
  plataforma!:TipoPlataforma

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  roles!: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  descripcion?: string;

}
