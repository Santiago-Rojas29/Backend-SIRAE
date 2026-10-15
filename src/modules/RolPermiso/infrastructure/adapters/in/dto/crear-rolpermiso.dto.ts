import { IsNotEmpty, IsUUID } from 'class-validator';

export class crearRolPermisoDto {
  @IsUUID()
  @IsNotEmpty()
  rol_id_FK!: string;

  @IsUUID()
  @IsNotEmpty()
  permiso_id_FK!: string;
}
