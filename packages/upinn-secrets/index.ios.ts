import { UpinnSecretsCommon } from './common';

export class UpinnSecrets extends UpinnSecretsCommon {
    upinnSecrets: NSCSUpinnSecretsiOSLib;
    constructor(
        private isDebug: boolean,
        private filename: string,
    ) {
        super();
        this.upinnSecrets = NSCSUpinnSecretsiOSLib.alloc().initWithIsDebugFileNameError(this.isDebug, this.filename);
    }

    public login(): number {
        const resLogin = this.upinnSecrets.login();
        return resLogin;
    }

    public get_secret(secret_name: string, secret_version?: string): Promise<string | number> {
        return new Promise(async (rs, rj) => {
            try {
                await this.upinnSecrets.getSecretWithVariableVersionCompletionHandler(secret_name, secret_version, (p1: string) => {
                    const result = p1 && !isNaN(Number(p1)) ? Number(p1) : p1;
                    rs(result);
                });
            } catch (error) {
                rj(error);
            }
        });
    }
}