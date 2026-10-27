
export interface DatosCifrados{
    datos_encryptados:string;
    iv:string;
    auth_tag:string
}


export interface CifradorPort{
    cifrar(textoPlano:string):DatosCifrados;
    descifrar(datos:DatosCifrados):string
}

export const CIFRAR='CifradorPort'