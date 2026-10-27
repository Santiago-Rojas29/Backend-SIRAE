import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { RegionalModule } from './modules/Regional/Regional.module';
import { CentroModule } from './modules/Centro/Centro.module';
import { UsuarioModule } from './modules/Usuario/Usuario.module';
import { FichaModule } from './modules/Ficha/Ficha.module';
import { ProgramaModule } from './modules/Programa/Programa.module';
import { CompetenciaModule } from './modules/Competencia/Competencia.module';
import { ResultadoaprendizajeModule } from './modules/Resultadoaprendizaje/Resultadoaprendizaje.module';
import { JuicioEvaluativoModule } from './modules/JuicioEvaluativo/JuicioEvaluativo.module';
import { MatriculaModule } from './modules/Matricula/Matricula.module';
import { TipoNovedadModule } from './modules/TipoNovedad/TipoNovedad.module';
import { NovedadModule } from './modules/Novedad/Novedad.module';
import { RolModule } from './modules/Rol/Rol.module';
import { PermisoModule } from './modules/Permiso/Permiso.module';
import { UsuarioRolModule } from './modules/UsuarioRol/UsuarioRol.module';
import { RolPermisoModule } from './modules/RolPermiso/RolPermiso.module';
import { AprendizModule } from './modules/Aprendiz/Aprendiz.module';
import { ResolucionModule } from './modules/Resolucion/Resolucion.module';
import { CategoriaEpModule } from './modules/CategoriaEp/CategoriaEp.module';
import { SeleccionEpModule } from './modules/SeleccionEp/SeleccionEp.module';
import { EmpresaModule } from './modules/Empresa/Empresa.module';
import { AlternativaepModule } from './modules/Alternativaep/Alternativaep.module';
import { EtapaProductivaModule } from './modules/EtapaProductiva/EtapaProductiva.module';
import { ContratoAprendizajeModule } from './modules/ContratoAprendizaje/ContratoAprendizaje.module';
import { CredencialesModule } from './modules/Credenciales/Credenciales.module';
import { TipocredencialModule } from './modules/Tipocredencial/Tipocredencial.module';
import { JobEjecutionModule } from './modules/JobEjecution/JobEjecution.module';
import { ArchivoProcesadoModule } from './modules/ArchivoProcesado/ArchivoProcesado.module';
import { JobDetalleModule } from './modules/JobDetalle/JobDetalle.module';
import { AuthModule } from './modules/Auth/Auth.module';



@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public')
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities:true,
      synchronize:false
    }),
    RegionalModule,
    CentroModule,
    UsuarioModule,
    FichaModule,
    ProgramaModule,
    CompetenciaModule,
    ResultadoaprendizajeModule,
    JuicioEvaluativoModule,
    MatriculaModule,
    TipoNovedadModule,
    NovedadModule,
    RolModule,
    PermisoModule,
    UsuarioRolModule,
    RolPermisoModule,
    AprendizModule,
    ResolucionModule,
    CategoriaEpModule,
    SeleccionEpModule,
    EmpresaModule,
    AlternativaepModule,
    EtapaProductivaModule,
    ContratoAprendizajeModule,
    CredencialesModule,
    TipocredencialModule,
    JobEjecutionModule,
    ArchivoProcesadoModule,
    JobDetalleModule,
    AuthModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
