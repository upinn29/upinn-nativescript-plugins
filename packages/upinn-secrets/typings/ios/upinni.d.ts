declare class NSCSUpinnSecretsiOSLib extends NSObject {

    static alloc(): NSCSUpinnSecretsiOSLib; // inherited from NSObject

    static new(): NSCSUpinnSecretsiOSLib; // inherited from NSObject

    constructor(o: { isDebug: boolean; fileName: string; });

    getSecretWithVariableVersion(variable: string, version: string): string;

    initWithIsDebugFileNameError(isDebug: boolean, fileName: string): this;

    login(): number;
}