import { NativeScriptConfig } from '@nativescript/core';

export default {
    ios: {
        SPMPackages: [
            {
                name: 'UpinnSecretsiOSLib',
                libs: ['UpinnSecretsiOSLib'],
                repositoryURL: 'https://github.com/upinn29/upinnsecretsios.git',
                version: '1.2.8',
            },
        ]
    }
} as NativeScriptConfig;
