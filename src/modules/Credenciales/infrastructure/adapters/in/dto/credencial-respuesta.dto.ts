import { Credenciales, EstadoCredencial } from '../../../../domain/entities/Credenciales.entity';

export class credencialRespuestaDto {
  id_credenciales!: string;
  centro_id_FK!: string;
  tipo_credenciales_id_FK!: string;
  estado!: EstadoCredencial;
  observacion_verificacion?: string;
  fecha_verificación!: Date;
  created_at?: Date;
  updated_at?: Date;
}

export function aCredencialRespuesta(credencial: Credenciales): credencialRespuestaDto {
  return {
    id_credenciales: credencial.id_credenciales,
    centro_id_FK: credencial.centro_id_FK,
    tipo_credenciales_id_FK: credencial.tipo_credenciales_id_FK,
    estado: credencial.estado,
    observacion_verificacion: credencial.observacion_verificacion,
    fecha_verificación: credencial.fecha_verificación,
    created_at: credencial.created_at,
    updated_at: credencial.updated_at,
  };
}
