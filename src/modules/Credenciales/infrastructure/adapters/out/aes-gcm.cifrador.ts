import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { CifradorPort, DatosCifrados } from "src/modules/Credenciales/domain/ports/cifrador.port";
import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";
import { create } from "node:domain";

@Injectable()
export class AesGcmCifrador implements CifradorPort{
    private readonly llave:Buffer;
    private readonly ALGORITMO='aes-256-gcm';

    constructor(private readonly config:ConfigService){
        const hex= this.config.get<string>('CREDENCIALES_MASTER_KEY');
        if(!hex){
            throw new Error('CREDENCIALES_MASTER_KEY no esta definida en el .env ')

        }
        this.llave=Buffer.from(hex,'hex');
        if(this.llave.length !== 32){
            throw new Error(
                `CREDENCIALES_MASTERKEY debe de medir 32 bytes, mide ${this.llave.length}`
            )
        }
        
    }
    cifrar(textoPlano:string):DatosCifrados{
        const iv=randomBytes(12);
        const cipher= createCipheriv(this.ALGORITMO, this.llave,iv)
        const encriptado= Buffer.concat([
            cipher.update(textoPlano, 'utf8' ),
            cipher.final()

        ]) 

        const authTag= cipher.getAuthTag();

        return{
            datos_encryptados:encriptado.toString('base64'),
            iv: iv.toString('base64'),
            auth_tag: authTag.toString('base64')
        }
    }

    descifrar(datos: DatosCifrados): string {
        const iv= Buffer.from(datos.iv,'base64');
        const auth_tag= Buffer.from(datos.auth_tag,'base64');
        const encriptado= Buffer.from(datos.datos_encryptados,'base64')


        const decipher= createDecipheriv(this.ALGORITMO,this.llave,iv);
        decipher.setAuthTag(auth_tag)
        

        const plano= Buffer.concat([
            decipher.update(encriptado),
            decipher.final(),
        ]);
        return plano.toString('utf8')
    }
    
}