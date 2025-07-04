import { Application } from '@nativescript/core';
import { UpinnSecretsCommon } from './common';

export class UpinnSecrets extends UpinnSecretsCommon {
    upinnSecrets:upinn.tech.upinnsecretsandroid.UpinnSecretsAndroid;

    constructor(
        private isDebug:boolean,
        private filename:string
    ){
        super();
        this.upinnSecrets = new upinn.tech.upinnsecretsandroid.UpinnSecretsAndroid(this.isDebug,Application.android.foregroundActivity,this.filename);
    }

    public login():number{
        const resLogin = this.upinnSecrets.login();
        return resLogin;
    }

    public get_secret(secret_name:string,secret_version?:string):string|number{
        const resSecret: upinn.tech.upinnsecretsandroid.SecretsResponse = (this.upinnSecrets as upinn.tech.upinnsecretsandroid.UpinnSecretsAndroid).get_secret(secret_name,secret_version);
        if(resSecret.getStatusCode()==200){
            return resSecret.getSecretValue();
        }else{
            return resSecret.getStatusCode();
        }
    }
}
