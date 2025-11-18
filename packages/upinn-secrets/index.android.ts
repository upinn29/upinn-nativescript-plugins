import { Application, Utils } from '@nativescript/core';
import { UpinnSecretsCommon } from './common';

declare var kotlin;

export class UpinnSecrets extends UpinnSecretsCommon {
    upinnSecrets: upinn.tech.upinnsecretsandroid.UpinnSecretsAndroid;
    secretsWrapper: upinn.tech.upinnsecretsandroid.SecretsWrapper;
    constructor(
        private isDebug: boolean,
        private filename: string
    ) {
        super();
        const context: android.content.Context = Application.android.foregroundActivity || Utils.android.getApplicationContext();
        this.upinnSecrets = new upinn.tech.upinnsecretsandroid.UpinnSecretsAndroid(this.isDebug, context, this.filename);
        if (this.upinnSecrets) {
            this.secretsWrapper = new upinn.tech.upinnsecretsandroid.SecretsWrapper(this.upinnSecrets);
        }
    }

    public login(): number {
        try {
            const resLogin = this.upinnSecrets.login();
            console.log(resLogin);
            return resLogin;
        } catch (error) {
            console.log(error)
        }
    }

    public async get_secret(secret_name: string, secret_version?: string): Promise<string> {
        try {
            // 1️⃣ Construimos la lista de requests
            const lista: java.util.List<upinn.tech.upinnsecretsandroid.SecretsWrapper.SecretRequest> =
                new java.util.ArrayList();
            lista.add(new upinn.tech.upinnsecretsandroid.SecretsWrapper.SecretRequest(secret_name, secret_version));

            // 2️⃣ Llamamos al wrapper Kotlin que retorna CompletableFuture
            const future: java.util.concurrent.CompletableFuture<java.util.List<any>> =
                this.secretsWrapper.getSecretsParallel(lista, "1");

            // 3️⃣ Convertimos CompletableFuture a Promise y esperamos resolución
            const resList: java.util.List<any> = await new Promise((resolve, reject) => {
                future
                    .thenAccept(
                        new (java.util as any).function.Consumer({
                            accept: (list: java.util.List<any>) => resolve(list),
                        })
                    )
                    .exceptionally(
                        new (java.util as any).function.Function({
                            apply: (err: any) => {
                                reject(err);
                                return null;
                            },
                        })
                    );
            });

            // 4️⃣ Iteramos sobre la lista de resultados (aunque normalmente será 1)
            for (let i = 0; i < resList.size(); i++) {
                const res = resList.get(i);

                if (res instanceof upinn.tech.upinnsecretsandroid.SecretResponseWrapper.Success) {
                    const secretValue = res.getSecret().getSecretValue();
                    console.log("Secret value:", secretValue);
                    return secretValue; // Retornamos el valor exitoso
                } else if (res instanceof upinn.tech.upinnsecretsandroid.SecretResponseWrapper.Error) {
                    const code = res.getCode();
                    const msg = res.getMessage();
                    console.error(`Error retrieving secret: ${msg}, Code: ${code}`);
                    throw new Error(`Secret retrieval failed: ${msg} (Code ${code})`);
                }
            }

            // 5️⃣ Nunca debería llegar aquí si hay al menos un resultado
            throw new Error("No secret returned");

        } catch (error) {
            console.error("get_secret failed:", error);
            throw error; // Lanzamos el error para que el caller lo maneje
        }
    }


}