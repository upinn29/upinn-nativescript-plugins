import { UpinnSecretsCommon } from './common';

export declare class UpinnSecrets extends UpinnSecretsCommon {
    constructor(
        private isDebug: boolean,
        private filename: string,
    ) {

    }

    login(): number;
    async get_secret(secret_name: string, secret_version?: string): Promise<any>;
}
