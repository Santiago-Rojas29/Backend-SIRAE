import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class actualizarRolPermisoDto {
  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  rol_id_FK?: string;

  @IsUUID()
  @IsNotEmpty()
  @IsOptional()
  permiso_id_FK?: string;
}
