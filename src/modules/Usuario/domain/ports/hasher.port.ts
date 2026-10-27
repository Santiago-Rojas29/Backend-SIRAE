import { Injectable } from "@nestjs/common";


export interface HasherPort{
    hashear(textoPlano: string):Promise<string>;
    comparar(textoPlano:string,hash:string):Promise<Boolean>

}

export const HASHER='HasherPort'