import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { TipoPlataforma } from 'src/modules/Tipocredencial/domain/entities/Tipocredencial.entity';

export class actualizarTipocredencialDto {

  @IsEnum(TipoPlataforma)
  @IsOptional()
  plataforma?: TipoPlataforma;


  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @IsOptional()
  nombre?: string;

  @IsString()
  @MaxLength(300)
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  roles?: string;

}
