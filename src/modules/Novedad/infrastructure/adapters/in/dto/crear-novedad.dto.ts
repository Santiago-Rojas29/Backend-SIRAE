import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { EstadoRegistroNovedad } from '../../../../domain/entities/Novedad.entity';

export class crearNovedadDto {
  @IsUUID()
  @IsNotEmpty()
  matricula_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  tipo_novedad_id_FK!: string;

  @IsUUID()
  @IsOptional()
  resolucion_id_FK?: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_novedad!: string;

  @IsBoolean()
  @IsOptional()
  solicitud_respondida?: boolean;

  @IsEnum(EstadoRegistroNovedad)
  @IsOptional()
  estado_registro?: EstadoRegistroNovedad;

  @IsDateString()
  @IsOptional()
  fecha_registro_sofia?: string;

  @IsString()
  @MaxLength(100)
  @IsOptional()
  verificacion?: string;

  @IsString()
  @IsOptional()
  observaciones?: string;
}
