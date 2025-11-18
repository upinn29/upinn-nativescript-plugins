declare class NSCSUpinnSecretsiOSLib extends NSObject {
    static alloc(): NSCSUpinnSecretsiOSLib; // inherited from NSObject

    static new(): NSCSUpinnSecretsiOSLib; // inherited from NSObject

    constructor(o: { isDebug: boolean; fileName: string });

    getSecretWithVariableVersionCompletionHandler(variable: string, version: string, completionHandler: (p1: string) => void): void;

    initWithIsDebugFileNameError(isDebug: boolean, fileName: string): this;

    login(): number;
}