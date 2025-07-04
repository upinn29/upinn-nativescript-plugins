import { UpinnSecretsCommon } from './common';

export declare class UpinnSecrets extends UpinnSecretsCommon implements UpinnSecrets{
    constructor(
        private isDebug:boolean,
        private filename:string,
    ){

    }

    login():number;
    get_secret(secret_name:string,secret_version?:string):string|number;
}
