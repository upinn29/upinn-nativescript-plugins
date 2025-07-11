import { UpinnSecretsCommon } from './common';

export class UpinnSecrets extends UpinnSecretsCommon {
    upinnSecrets:NSCSUpinnSecretsiOSLib;
    constructor(
        private isDebug:boolean,
        private filename:string,
    ){
        super();
        this.upinnSecrets = NSCSUpinnSecretsiOSLib.alloc().initWithIsDebugFileNameError(this.isDebug, this.filename);
    }

    public login(): number {
        const resLogin = this.upinnSecrets.login();
        return resLogin;
    }

    public get_secret(secret_name: string, secret_version?: string): string | number {
        let resSecret = this.upinnSecrets.getSecretWithVariableVersion(secret_name, secret_version);
        return resSecret && !isNaN(Number(resSecret)) ? Number(resSecret) : resSecret;
    }
}
