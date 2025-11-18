
declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class AndroidSystemCleanable extends upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.AndroidSystemCleanable>;
                public clean(): void;
                public constructor(cleanable: java.lang.ref.Cleaner.Cleanable);
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class AndroidSystemCleaner extends upinn.tech.upinnsecretsandroid.UniffiCleaner {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.AndroidSystemCleaner>;
                public register(param0: any, param1: java.lang.Runnable): upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable;
                public getCleaner(): java.lang.ref.Cleaner;
                public register(value: any, cleanUpTask: java.lang.Runnable): upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable;
                public constructor();
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class DeviceInfo {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.DeviceInfo>;
                public getManufacturer(): string;
                public getSdkVersion(): string;
                public constructor(context: globalAndroid.content.Context);
                public getOs(): string;
                public getLanguage(): string;
                public getPackageName(): string;
                public getOsVersion(): string;
                public getModel(): string;
                public getDeviceType(): string;
                public getRegion(): string;
            }
            export module DeviceInfo {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.DeviceInfo.Companion>;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class Disposable {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.Disposable>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.Disposable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    destroy(): void;
                    "<clinit>"(): void;
                });
                public constructor();
                public destroy(): void;
            }
            export module Disposable {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.Disposable.Companion>;
                    public destroy(idx: androidNative.Array<any>): void;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverter<KotlinType, FfiType> extends java.lang.Object {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverter<any, any>>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.FfiConverter<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    lift(param0: FfiType): KotlinType;
                    lower(param0: KotlinType): FfiType;
                    read(param0: java.nio.ByteBuffer): KotlinType;
                    "allocationSize-I7RO_PI"(param0: KotlinType): number;
                    write(param0: KotlinType, param1: java.nio.ByteBuffer): void;
                    lowerIntoRustBuffer(param0: KotlinType): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): KotlinType;
                });
                public constructor();
                public read(param0: java.nio.ByteBuffer): KotlinType;
                public lift(param0: FfiType): KotlinType;
                public write(param0: KotlinType, param1: java.nio.ByteBuffer): void;
                public lower(param0: KotlinType): FfiType;
                public lowerIntoRustBuffer(param0: KotlinType): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): KotlinType;
                public "allocationSize-I7RO_PI"(param0: KotlinType): number;
            }
            export module FfiConverter {
                export class DefaultImpls {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverter.DefaultImpls>;
                    public static liftFromRustBuffer(item: upinn.tech.upinnsecretsandroid.FfiConverter<any, any>, item: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                    public static lowerIntoRustBuffer($i$a$alsoFfiConverter$lowerIntoRustBuffer$bbuf$1: upinn.tech.upinnsecretsandroid.FfiConverter<any, any>, it: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterBoolean extends upinn.tech.upinnsecretsandroid.FfiConverter<java.lang.Boolean, java.lang.Byte> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterBoolean>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterBoolean;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lift(value: number): java.lang.Boolean;
                public "allocationSize-I7RO_PI"(value: boolean): number;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): java.lang.Boolean;
                public write(value: boolean, buf: java.nio.ByteBuffer): void;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public read(buf: java.nio.ByteBuffer): java.lang.Boolean;
                public lower(value: boolean): java.lang.Byte;
                public lower(param0: any): any;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lowerIntoRustBuffer(value: boolean): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lift(param0: any): any;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterLong extends upinn.tech.upinnsecretsandroid.FfiConverter<java.lang.Long, java.lang.Long> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterLong>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterLong;
                public "allocationSize-I7RO_PI"(value: number): number;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): java.lang.Long;
                public lower(value: number): java.lang.Long;
                public read(buf: java.nio.ByteBuffer): java.lang.Long;
                public lift(value: number): java.lang.Long;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lowerIntoRustBuffer(value: number): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public lower(param0: any): any;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
                public write(value: number, buf: java.nio.ByteBuffer): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterRustBuffer<KotlinType> extends upinn.tech.upinnsecretsandroid.FfiConverter<any, upinn.tech.upinnsecretsandroid.RustBuffer.ByValue> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<any>>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                    lower(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    lift(param0: any): any;
                    lower(param0: any): any;
                    read(param0: java.nio.ByteBuffer): any;
                    "allocationSize-I7RO_PI"(param0: any): number;
                    write(param0: any, param1: java.nio.ByteBuffer): void;
                    lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                });
                public constructor();
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public lower(param0: any): any;
                public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lower(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
            }
            export module FfiConverterRustBuffer {
                export class DefaultImpls {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer.DefaultImpls>;
                    public static lowerIntoRustBuffer($this: upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<any>, value: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    public static liftFromRustBuffer($this: upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<any>, rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                    public static lower($this: upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<any>, value: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    public static lift($this: upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<any>, value: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterSequenceUByte extends upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<java.util.List<any>> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterSequenceUByte>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterSequenceUByte;
                public read(it: java.nio.ByteBuffer): java.util.List<any>;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): java.util.List<any>;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lowerIntoRustBuffer(value: java.util.List<any>): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public write(it: java.util.List<any>, element$iv: java.nio.ByteBuffer): void;
                public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lift(value: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): java.util.List<any>;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public lower(param0: any): any;
                public lower(value: java.util.List<any>): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public "allocationSize-I7RO_PI"(it: java.util.List<any>): number;
                public lower(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterString extends upinn.tech.upinnsecretsandroid.FfiConverter<string, upinn.tech.upinnsecretsandroid.RustBuffer.ByValue> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterString>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterString;
                public lift(byteArr: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): string;
                public lower(rbuf: string): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lowerIntoRustBuffer(value: string): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public "allocationSize-I7RO_PI"(sizeForString: string): number;
                public write(this_: string, value: java.nio.ByteBuffer): void;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public toUtf8($this$toUtf8_u24lambda_u240: string): java.nio.ByteBuffer;
                public read(byteArr: java.nio.ByteBuffer): string;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): string;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public lower(param0: any): any;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterTypePluginError extends upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<upinn.tech.upinnsecretsandroid.PluginException> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterTypePluginError>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterTypePluginError;
                public read(buf: java.nio.ByteBuffer): upinn.tech.upinnsecretsandroid.PluginException;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lower(value: upinn.tech.upinnsecretsandroid.PluginException): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lift(value: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.PluginException;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.PluginException;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public lower(param0: any): any;
                public lower(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
                public "allocationSize-I7RO_PI"(value: upinn.tech.upinnsecretsandroid.PluginException): number;
                public write(it: upinn.tech.upinnsecretsandroid.PluginException, this_: java.nio.ByteBuffer): void;
                public lowerIntoRustBuffer(value: upinn.tech.upinnsecretsandroid.PluginException): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterTypeSecrets extends upinn.tech.upinnsecretsandroid.FfiConverter<upinn.tech.upinnsecretsandroid.Secrets, com.sun.jna.Pointer> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterTypeSecrets>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterTypeSecrets;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lowerIntoRustBuffer(value: upinn.tech.upinnsecretsandroid.Secrets): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lower(value: upinn.tech.upinnsecretsandroid.Secrets): com.sun.jna.Pointer;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.Secrets;
                public read(buf: java.nio.ByteBuffer): upinn.tech.upinnsecretsandroid.Secrets;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public lower(param0: any): any;
                public lift(value: com.sun.jna.Pointer): upinn.tech.upinnsecretsandroid.Secrets;
                public read(param0: java.nio.ByteBuffer): any;
                public "allocationSize-I7RO_PI"(value: upinn.tech.upinnsecretsandroid.Secrets): number;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
                public write(value: upinn.tech.upinnsecretsandroid.Secrets, buf: java.nio.ByteBuffer): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterTypeSecretsArgs extends upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<upinn.tech.upinnsecretsandroid.SecretsArgs> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterTypeSecretsArgs>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterTypeSecretsArgs;
                public "allocationSize-I7RO_PI"(value: upinn.tech.upinnsecretsandroid.SecretsArgs): number;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lower(value: upinn.tech.upinnsecretsandroid.SecretsArgs): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.SecretsArgs;
                public lowerIntoRustBuffer(value: upinn.tech.upinnsecretsandroid.SecretsArgs): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lift(value: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.SecretsArgs;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public read(buf: java.nio.ByteBuffer): upinn.tech.upinnsecretsandroid.SecretsArgs;
                public lower(param0: any): any;
                public write(value: upinn.tech.upinnsecretsandroid.SecretsArgs, buf: java.nio.ByteBuffer): void;
                public lower(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterTypeSecretsError extends upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<upinn.tech.upinnsecretsandroid.SecretsError> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterTypeSecretsError>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterTypeSecretsError;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public read(buf: java.nio.ByteBuffer): upinn.tech.upinnsecretsandroid.SecretsError;
                public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.SecretsError;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public "allocationSize-I7RO_PI"(value: upinn.tech.upinnsecretsandroid.SecretsError): number;
                public lower(param0: any): any;
                public lower(value: upinn.tech.upinnsecretsandroid.SecretsError): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lowerIntoRustBuffer(value: upinn.tech.upinnsecretsandroid.SecretsError): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lower(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
                public write(value: upinn.tech.upinnsecretsandroid.SecretsError, buf: java.nio.ByteBuffer): void;
                public lift(value: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.SecretsError;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterTypeSecretsResponse extends upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer<upinn.tech.upinnsecretsandroid.SecretsResponse> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterTypeSecretsResponse>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterTypeSecretsResponse;
                public lowerIntoRustBuffer(value: upinn.tech.upinnsecretsandroid.SecretsResponse): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public lower(value: upinn.tech.upinnsecretsandroid.SecretsResponse): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lift(value: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.SecretsResponse;
                public read(buf: java.nio.ByteBuffer): upinn.tech.upinnsecretsandroid.SecretsResponse;
                public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public liftFromRustBuffer(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.SecretsResponse;
                public "allocationSize-I7RO_PI"(value: upinn.tech.upinnsecretsandroid.SecretsResponse): number;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public lower(param0: any): any;
                public lower(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public write(value: upinn.tech.upinnsecretsandroid.SecretsResponse, buf: java.nio.ByteBuffer): void;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class FfiConverterUByte extends upinn.tech.upinnsecretsandroid.FfiConverter<any, java.lang.Byte> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.FfiConverterUByte>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.FfiConverterUByte;
                public liftFromRustBuffer(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                public "lower-7apg3OU"(value: number): java.lang.Byte;
                public lowerIntoRustBuffer(param0: any): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public "lift-Wa3L5BU"(value: number): number;
                public "allocationSize-I7RO_PI"(param0: any): number;
                public lower(param0: any): any;
                public "read-Wa3L5BU"(buf: java.nio.ByteBuffer): number;
                public "liftFromRustBuffer-Wa3L5BU"(rbuf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): number;
                public read(param0: java.nio.ByteBuffer): any;
                public write(param0: any, param1: java.nio.ByteBuffer): void;
                public lift(param0: any): any;
                public "write-0ky7B_Q"(value: number, buf: java.nio.ByteBuffer): void;
                public "lowerIntoRustBuffer-7apg3OU"(value: number): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public "allocationSize-qRK8ubM"(value: number): number;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class ForeignBytes {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.ForeignBytes>;
                public len: number;
                public data: com.sun.jna.Pointer;
                public constructor();
            }
            export module ForeignBytes {
                export class ByValue extends upinn.tech.upinnsecretsandroid.ForeignBytes {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.ForeignBytes.ByValue>;
                    public constructor();
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class IntegrityCheckingUniffiLib {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.IntegrityCheckingUniffiLib>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.IntegrityCheckingUniffiLib interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    uniffi_upinn_secrets_checksum_method_secrets_get_secret(): number;
                    uniffi_upinn_secrets_checksum_method_secrets_login(): number;
                    uniffi_upinn_secrets_checksum_constructor_secrets_new(): number;
                    ffi_upinn_secrets_uniffi_contract_version(): number;
                });
                public constructor();
                public uniffi_upinn_secrets_checksum_method_secrets_login(): number;
                public uniffi_upinn_secrets_checksum_constructor_secrets_new(): number;
                public uniffi_upinn_secrets_checksum_method_secrets_get_secret(): number;
                public ffi_upinn_secrets_uniffi_contract_version(): number;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class InternalException {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.InternalException>;
                public constructor(message: string);
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class NoPointer {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.NoPointer>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.NoPointer;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export abstract class PluginException {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.PluginException>;
            }
            export module PluginException {
                export class ErrorCode extends upinn.tech.upinnsecretsandroid.PluginException {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.PluginException.ErrorCode>;
                    public constructor(code: number);
                    public getMessage(): string;
                    public getCode(): number;
                }
                export class ErrorHandler extends upinn.tech.upinnsecretsandroid.UniffiRustCallStatusErrorHandler<upinn.tech.upinnsecretsandroid.PluginException> {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.PluginException.ErrorHandler>;
                    public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
                    public lift(error_buf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.PluginException;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class RustBuffer {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.RustBuffer>;
                public capacity: number;
                public len: number;
                public data: com.sun.jna.Pointer;
                public asByteBuffer(): java.nio.ByteBuffer;
                public setValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.RustBuffer): void;
                public constructor();
            }
            export module RustBuffer {
                export class ByReference extends upinn.tech.upinnsecretsandroid.RustBuffer {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.RustBuffer.ByReference>;
                    public constructor();
                }
                export class ByValue extends upinn.tech.upinnsecretsandroid.RustBuffer {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.RustBuffer.ByValue>;
                    public constructor();
                }
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.RustBuffer.Companion>;
                    public free$UpinnSecretsAndroid_release(status: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): void;
                    public "create-twO9MuI$UpinnSecretsAndroid_release"(this_: number, capacity: number, len: com.sun.jna.Pointer): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    public "alloc-VKZWuLQ$UpinnSecretsAndroid_release"(status: number): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class RustBufferByReference {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.RustBufferByReference>;
                public setValue(this_: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): void;
                public constructor();
                public getValue(): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export abstract class SecretResponseWrapper {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretResponseWrapper>;
            }
            export module SecretResponseWrapper {
                export class Error extends upinn.tech.upinnsecretsandroid.SecretResponseWrapper {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretResponseWrapper.Error>;
                    public toString(): string;
                    public copy(code: number, message: string): upinn.tech.upinnsecretsandroid.SecretResponseWrapper.Error;
                    public constructor(code: number, message: string);
                    public component2(): string;
                    public component1(): number;
                    public equals(other: any): boolean;
                    public getMessage(): string;
                    public hashCode(): number;
                    public getCode(): number;
                }
                export class Success extends upinn.tech.upinnsecretsandroid.SecretResponseWrapper {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretResponseWrapper.Success>;
                    public component1(): upinn.tech.upinnsecretsandroid.SecretsResponse;
                    public getSecret(): upinn.tech.upinnsecretsandroid.SecretsResponse;
                    public toString(): string;
                    public equals(other: any): boolean;
                    public constructor(secret: upinn.tech.upinnsecretsandroid.SecretsResponse);
                    public hashCode(): number;
                    public copy(secret: upinn.tech.upinnsecretsandroid.SecretsResponse): upinn.tech.upinnsecretsandroid.SecretResponseWrapper.Success;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class Secrets implements upinn.tech.upinnsecretsandroid.Disposable, upinn.tech.upinnsecretsandroid.SecretsInterface {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.Secrets>;
                public login(_status: upinn.tech.upinnsecretsandroid.SecretsArgs): upinn.tech.upinnsecretsandroid.SecretsError;
                public close(): void;
                public uniffiClonePointer(): com.sun.jna.Pointer;
                public constructor(_status: boolean, $i$f$uniffiRustCallWithError: string);
                public getSecret(args: upinn.tech.upinnsecretsandroid.SecretsArgs, $completion: any): any;
                public constructor(noPointer: upinn.tech.upinnsecretsandroid.NoPointer);
                public getPointer(): com.sun.jna.Pointer;
                public getCleanable(): upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable;
                public login(param0: upinn.tech.upinnsecretsandroid.SecretsArgs): upinn.tech.upinnsecretsandroid.SecretsError;
                public destroy(): void;
                public getSecret(param0: upinn.tech.upinnsecretsandroid.SecretsArgs, param1: any): any;
                public callWithPointer$UpinnSecretsAndroid_release($i$f$callWithPointer$UpinnSecretsAndroid_release: any): any;
                public constructor(pointer: com.sun.jna.Pointer);
            }
            export module Secrets {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.Secrets.Companion>;
                }
                export class UniffiCleanAction {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.Secrets.UniffiCleanAction>;
                    public run(): void;
                    public constructor(pointer: com.sun.jna.Pointer);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class SecretsArgs {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsArgs>;
                public setOsVersion(param0: string): void;
                public setDeviceType(param0: string): void;
                public component6(): string;
                public component13(): string;
                public setFileBytes(param0: java.util.List<any>): void;
                public component1(): java.util.List<any>;
                public getDeviceType(): string;
                public setVersion(param0: string): void;
                public constructor(fileBytes: java.util.List<any>, fileName: string, packageName: string, manufacturer: string, model: string, os: string, osVersion: string, sdkVersion: string, deviceType: string, language: string, region: string, variable: string, version: string);
                public setFileName(param0: string): void;
                public equals(other: any): boolean;
                public hashCode(): number;
                public component5(): string;
                public component12(): string;
                public component2(): string;
                public component9(): string;
                public getVariable(): string;
                public setRegion(param0: string): void;
                public setManufacturer(param0: string): void;
                public setSdkVersion(param0: string): void;
                public getFileBytes(): java.util.List<any>;
                public component11(): string;
                public getFileName(): string;
                public getOs(): string;
                public getPackageName(): string;
                public setVariable(param0: string): void;
                public component4(): string;
                public component8(): string;
                public getOsVersion(): string;
                public setPackageName(param0: string): void;
                public getModel(): string;
                public toString(): string;
                public getVersion(): string;
                public getManufacturer(): string;
                public getSdkVersion(): string;
                public setLanguage(param0: string): void;
                public component7(): string;
                public getLanguage(): string;
                public component3(): string;
                public component10(): string;
                public copy(fileBytes: java.util.List<any>, fileName: string, packageName: string, manufacturer: string, model: string, os: string, osVersion: string, sdkVersion: string, deviceType: string, language: string, region: string, variable: string, version: string): upinn.tech.upinnsecretsandroid.SecretsArgs;
                public setModel(param0: string): void;
                public setOs(param0: string): void;
                public getRegion(): string;
            }
            export module SecretsArgs {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsArgs.Companion>;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class SecretsError {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsError>;
                public setStatusCode(param0: number): void;
                public copy(token: string, statusCode: number): upinn.tech.upinnsecretsandroid.SecretsError;
                public constructor(token: string, statusCode: number);
                public getStatusCode(): number;
                public equals(other: any): boolean;
                public component1(): string;
                public component2(): number;
                public hashCode(): number;
                public toString(): string;
                public getToken(): string;
                public setToken(param0: string): void;
            }
            export module SecretsError {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsError.Companion>;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class SecretsInterface {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsInterface>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.SecretsInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    getSecret(param0: upinn.tech.upinnsecretsandroid.SecretsArgs, param1: any): any;
                    login(param0: upinn.tech.upinnsecretsandroid.SecretsArgs): upinn.tech.upinnsecretsandroid.SecretsError;
                    "<clinit>"(): void;
                });
                public constructor();
                public getSecret(param0: upinn.tech.upinnsecretsandroid.SecretsArgs, param1: any): any;
                public login(param0: upinn.tech.upinnsecretsandroid.SecretsArgs): upinn.tech.upinnsecretsandroid.SecretsError;
            }
            export module SecretsInterface {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsInterface.Companion>;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class SecretsResponse {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsResponse>;
                public constructor(secretValue: string, statusCode: number);
                public setStatusCode(param0: number): void;
                public getStatusCode(): number;
                public equals(other: any): boolean;
                public component1(): string;
                public component2(): number;
                public hashCode(): number;
                public getSecretValue(): string;
                public copy(secretValue: string, statusCode: number): upinn.tech.upinnsecretsandroid.SecretsResponse;
                public toString(): string;
                public setSecretValue(param0: string): void;
            }
            export module SecretsResponse {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsResponse.Companion>;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class SecretsWrapper {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsWrapper>;
                public constructor(secretsRef: upinn.tech.upinnsecretsandroid.UpinnSecretsAndroid);
                public getSecretAsync(this_: string, variable: string): java.util.concurrent.CompletableFuture<upinn.tech.upinnsecretsandroid.SecretResponseWrapper>;
                public getSecretsParallel(this_: java.util.List<upinn.tech.upinnsecretsandroid.SecretsWrapper.SecretRequest>, requests: string): java.util.concurrent.CompletableFuture<java.util.List<upinn.tech.upinnsecretsandroid.SecretResponseWrapper>>;
            }
            export module SecretsWrapper {
                export class SecretRequest {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.SecretsWrapper.SecretRequest>;
                    public getVersion(): string;
                    public toString(): string;
                    public component1(): string;
                    public component2(): string;
                    public equals(other: any): boolean;
                    public constructor(variable: string, version: string);
                    public getVariable(): string;
                    public hashCode(): number;
                    public copy(variable: string, version: string): upinn.tech.upinnsecretsandroid.SecretsWrapper.SecretRequest;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiCallbackInterfaceFree {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiCallbackInterfaceFree>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiCallbackInterfaceFree interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number): void;
                });
                public constructor();
                public callback(param0: number): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiCleaner {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiCleaner>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiCleaner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    register(param0: any, param1: java.lang.Runnable): upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable;
                    "<clinit>"(): void;
                });
                public constructor();
                public register(param0: any, param1: java.lang.Runnable): upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable;
            }
            export module UniffiCleaner {
                export class Cleanable {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable>;
                    /**
                     * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiCleaner$Cleanable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: {
                        clean(): void;
                    });
                    public constructor();
                    public clean(): void;
                }
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiCleaner.Companion>;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFuture {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFuture>;
                public handle: number;
                public free: upinn.tech.upinnsecretsandroid.UniffiForeignFutureFree;
                public constructor(handle: number, free: upinn.tech.upinnsecretsandroid.UniffiForeignFutureFree);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFuture): void;
                public constructor();
            }
            export module UniffiForeignFuture {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFuture {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFuture.UniffiByValue>;
                    public constructor();
                    public constructor(handle: number, free: upinn.tech.upinnsecretsandroid.UniffiForeignFutureFree);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteF32 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteF32>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteF32 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF32.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF32.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteF64 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteF64>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteF64 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF64.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF64.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteI16 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteI16>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteI16 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI16.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI16.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteI32 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteI32>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteI32 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI32.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI32.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteI64 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteI64>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteI64 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI64.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI64.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteI8 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteI8>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteI8 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI8.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI8.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompletePointer {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompletePointer>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompletePointer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructPointer.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructPointer.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteRustBuffer {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteRustBuffer>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteRustBuffer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructRustBuffer.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructRustBuffer.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteU16 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteU16>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteU16 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU16.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU16.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteU32 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteU32>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteU32 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU32.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU32.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteU64 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteU64>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteU64 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU64.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU64.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteU8 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteU8>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteU8 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU8.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU8.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureCompleteVoid {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteVoid>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureCompleteVoid interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructVoid.UniffiByValue): void;
                });
                public constructor();
                public callback(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructVoid.UniffiByValue): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureFree {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureFree>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiForeignFutureFree interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number): void;
                });
                public constructor();
                public callback(param0: number): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructF32 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF32>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF32): void;
                public constructor();
            }
            export module UniffiForeignFutureStructF32 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF32 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF32.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructF64 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF64>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF64): void;
                public constructor();
            }
            export module UniffiForeignFutureStructF64 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF64 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructF64.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructI16 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI16>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI16): void;
                public constructor();
            }
            export module UniffiForeignFutureStructI16 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI16 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI16.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructI32 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI32>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI32): void;
                public constructor();
            }
            export module UniffiForeignFutureStructI32 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI32 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI32.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructI64 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI64>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI64): void;
                public constructor();
            }
            export module UniffiForeignFutureStructI64 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI64 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI64.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructI8 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI8>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI8): void;
                public constructor();
            }
            export module UniffiForeignFutureStructI8 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI8 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructI8.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructPointer {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructPointer>;
                public returnValue: com.sun.jna.Pointer;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: com.sun.jna.Pointer, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructPointer): void;
                public constructor();
            }
            export module UniffiForeignFutureStructPointer {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructPointer {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructPointer.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: com.sun.jna.Pointer, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructRustBuffer {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructRustBuffer>;
                public returnValue: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructRustBuffer): void;
                public constructor();
            }
            export module UniffiForeignFutureStructRustBuffer {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructRustBuffer {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructRustBuffer.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructU16 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU16>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU16): void;
                public constructor();
            }
            export module UniffiForeignFutureStructU16 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU16 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU16.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructU32 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU32>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU32): void;
                public constructor();
            }
            export module UniffiForeignFutureStructU32 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU32 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU32.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructU64 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU64>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU64): void;
                public constructor();
            }
            export module UniffiForeignFutureStructU64 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU64 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU64.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructU8 {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU8>;
                public returnValue: number;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU8): void;
                public constructor();
            }
            export module UniffiForeignFutureStructU8 {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU8 {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructU8.UniffiByValue>;
                    public constructor();
                    public constructor(returnValue: number, callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiForeignFutureStructVoid {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructVoid>;
                public callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                public uniffiSetValue$UpinnSecretsAndroid_release(other: upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructVoid): void;
                public constructor(callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                public constructor();
            }
            export module UniffiForeignFutureStructVoid {
                export class UniffiByValue extends upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructVoid {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiForeignFutureStructVoid.UniffiByValue>;
                    public constructor();
                    public constructor(callStatus: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue);
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiHandleMap<T> extends java.lang.Object {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiHandleMap<any>>;
                public insert(this_: T): number;
                public remove(handle: number): T;
                public getSize(): number;
                public get(handle: number): T;
                public constructor();
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiJnaCleanable extends upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiJnaCleanable>;
                public constructor(cleanable: com.sun.jna.internal.Cleaner.Cleanable);
                public clean(): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiJnaCleaner extends upinn.tech.upinnsecretsandroid.UniffiCleaner {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiJnaCleaner>;
                public register(param0: any, param1: java.lang.Runnable): upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable;
                public register(value: any, cleanUpTask: java.lang.Runnable): upinn.tech.upinnsecretsandroid.UniffiCleaner.Cleanable;
                public constructor();
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiLib {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiLib>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiLib interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    uniffi_upinn_secrets_fn_clone_secrets(param0: com.sun.jna.Pointer, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): com.sun.jna.Pointer;
                    uniffi_upinn_secrets_fn_free_secrets(param0: com.sun.jna.Pointer, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): void;
                    uniffi_upinn_secrets_fn_constructor_secrets_new(param0: number, param1: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, param2: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): com.sun.jna.Pointer;
                    uniffi_upinn_secrets_fn_method_secrets_get_secret(param0: com.sun.jna.Pointer, param1: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): number;
                    uniffi_upinn_secrets_fn_method_secrets_login(param0: com.sun.jna.Pointer, param1: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, param2: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    ffi_upinn_secrets_rustbuffer_alloc(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    ffi_upinn_secrets_rustbuffer_from_bytes(param0: upinn.tech.upinnsecretsandroid.ForeignBytes.ByValue, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    ffi_upinn_secrets_rustbuffer_free(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): void;
                    ffi_upinn_secrets_rustbuffer_reserve(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, param1: number, param2: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    ffi_upinn_secrets_rust_future_poll_u8(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_u8(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_u8(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_u8(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_i8(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_i8(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_i8(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_i8(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_u16(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_u16(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_u16(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_u16(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_i16(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_i16(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_i16(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_i16(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_u32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_u32(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_u32(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_u32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_i32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_i32(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_i32(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_i32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_u64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_u64(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_u64(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_u64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_i64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_i64(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_i64(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_i64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_f32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_f32(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_f32(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_f32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_f64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_f64(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_f64(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_f64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                    ffi_upinn_secrets_rust_future_poll_pointer(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_pointer(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_pointer(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_pointer(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): com.sun.jna.Pointer;
                    ffi_upinn_secrets_rust_future_poll_rust_buffer(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_rust_buffer(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_rust_buffer(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_rust_buffer(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                    ffi_upinn_secrets_rust_future_poll_void(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                    ffi_upinn_secrets_rust_future_cancel_void(param0: number): void;
                    ffi_upinn_secrets_rust_future_free_void(param0: number): void;
                    ffi_upinn_secrets_rust_future_complete_void(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): void;
                    "<clinit>"(): void;
                });
                public constructor();
                public ffi_upinn_secrets_rust_future_free_u16(param0: number): void;
                public ffi_upinn_secrets_rust_future_poll_i8(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public uniffi_upinn_secrets_fn_free_secrets(param0: com.sun.jna.Pointer, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): void;
                public ffi_upinn_secrets_rust_future_cancel_u16(param0: number): void;
                public ffi_upinn_secrets_rust_future_complete_i16(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_poll_i32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rustbuffer_free(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): void;
                public ffi_upinn_secrets_rust_future_poll_u32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public uniffi_upinn_secrets_fn_method_secrets_login(param0: com.sun.jna.Pointer, param1: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, param2: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public ffi_upinn_secrets_rust_future_cancel_u8(param0: number): void;
                public ffi_upinn_secrets_rust_future_complete_rust_buffer(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public ffi_upinn_secrets_rust_future_poll_rust_buffer(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_complete_i8(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_cancel_i64(param0: number): void;
                public ffi_upinn_secrets_rust_future_free_i32(param0: number): void;
                public ffi_upinn_secrets_rust_future_cancel_f32(param0: number): void;
                public ffi_upinn_secrets_rust_future_cancel_i32(param0: number): void;
                public ffi_upinn_secrets_rust_future_free_u8(param0: number): void;
                public ffi_upinn_secrets_rust_future_cancel_void(param0: number): void;
                public ffi_upinn_secrets_rust_future_complete_i32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_cancel_i8(param0: number): void;
                public ffi_upinn_secrets_rust_future_poll_f32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_complete_f64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_cancel_u64(param0: number): void;
                public uniffi_upinn_secrets_fn_clone_secrets(param0: com.sun.jna.Pointer, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): com.sun.jna.Pointer;
                public ffi_upinn_secrets_rust_future_poll_f64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_free_i64(param0: number): void;
                public ffi_upinn_secrets_rustbuffer_from_bytes(param0: upinn.tech.upinnsecretsandroid.ForeignBytes.ByValue, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public ffi_upinn_secrets_rust_future_complete_u16(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_poll_u16(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_poll_i16(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_cancel_rust_buffer(param0: number): void;
                public ffi_upinn_secrets_rust_future_free_f64(param0: number): void;
                public uniffi_upinn_secrets_fn_constructor_secrets_new(param0: number, param1: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, param2: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): com.sun.jna.Pointer;
                public ffi_upinn_secrets_rust_future_cancel_f64(param0: number): void;
                public ffi_upinn_secrets_rust_future_poll_void(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_complete_u32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_complete_u64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_complete_void(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): void;
                public ffi_upinn_secrets_rust_future_poll_i64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_poll_u64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_free_rust_buffer(param0: number): void;
                public ffi_upinn_secrets_rustbuffer_alloc(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public ffi_upinn_secrets_rust_future_cancel_i16(param0: number): void;
                public uniffi_upinn_secrets_fn_method_secrets_get_secret(param0: com.sun.jna.Pointer, param1: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): number;
                public ffi_upinn_secrets_rust_future_free_u64(param0: number): void;
                public ffi_upinn_secrets_rust_future_complete_u8(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rustbuffer_reserve(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue, param1: number, param2: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public ffi_upinn_secrets_rust_future_free_void(param0: number): void;
                public ffi_upinn_secrets_rust_future_poll_u8(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_complete_pointer(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): com.sun.jna.Pointer;
                public ffi_upinn_secrets_rust_future_complete_i64(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_cancel_u32(param0: number): void;
                public ffi_upinn_secrets_rust_future_complete_f32(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustCallStatus): number;
                public ffi_upinn_secrets_rust_future_cancel_pointer(param0: number): void;
                public ffi_upinn_secrets_rust_future_poll_pointer(param0: number, param1: upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback, param2: number): void;
                public ffi_upinn_secrets_rust_future_free_f32(param0: number): void;
                public ffi_upinn_secrets_rust_future_free_u32(param0: number): void;
                public ffi_upinn_secrets_rust_future_free_pointer(param0: number): void;
                public ffi_upinn_secrets_rust_future_free_i8(param0: number): void;
                public ffi_upinn_secrets_rust_future_free_i16(param0: number): void;
            }
            export module UniffiLib {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiLib.Companion>;
                    public getCLEANER$UpinnSecretsAndroid_release(): upinn.tech.upinnsecretsandroid.UniffiCleaner;
                    public getINSTANCE$UpinnSecretsAndroid_release(): upinn.tech.upinnsecretsandroid.UniffiLib;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiNullRustCallStatusErrorHandler extends upinn.tech.upinnsecretsandroid.UniffiRustCallStatusErrorHandler<upinn.tech.upinnsecretsandroid.InternalException> {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiNullRustCallStatusErrorHandler>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.UniffiNullRustCallStatusErrorHandler;
                public lift(error_buf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.InternalException;
                public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): any;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiRustCallStatus {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiRustCallStatus>;
                public code: number;
                public error_buf: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue;
                public isError(): boolean;
                public isPanic(): boolean;
                public isSuccess(): boolean;
                public constructor();
            }
            export module UniffiRustCallStatus {
                export class ByValue extends upinn.tech.upinnsecretsandroid.UniffiRustCallStatus {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue>;
                    public constructor();
                }
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.Companion>;
                    public create(this_: number, code: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): upinn.tech.upinnsecretsandroid.UniffiRustCallStatus.ByValue;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiRustCallStatusErrorHandler<E> extends java.lang.Object {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiRustCallStatusErrorHandler<any>>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiRustCallStatusErrorHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): E;
                });
                public constructor();
                public lift(param0: upinn.tech.upinnsecretsandroid.RustBuffer.ByValue): E;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UniffiRustFutureContinuationCallback {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback>;
                /**
                 * Constructs a new instance of the upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                    callback(param0: number, param1: number): void;
                });
                public constructor();
                public callback(param0: number, param1: number): void;
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class UpinnSecretsAndroid {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UpinnSecretsAndroid>;
                public constructor(isDebug: boolean, context: globalAndroid.content.Context, fileName: string);
                public login(): number;
                public get_secret(this_: string, variable: string, variable: any): any;
            }
            export module UpinnSecretsAndroid {
                export class Companion {
                    public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.UpinnSecretsAndroid.Companion>;
                }
            }
        }
    }
}

declare module upinn {
    export module tech {
        export module upinnsecretsandroid {
            export class uniffiRustFutureContinuationCallbackImpl extends upinn.tech.upinnsecretsandroid.UniffiRustFutureContinuationCallback {
                public static class: java.lang.Class<upinn.tech.upinnsecretsandroid.uniffiRustFutureContinuationCallbackImpl>;
                public static INSTANCE: upinn.tech.upinnsecretsandroid.uniffiRustFutureContinuationCallbackImpl;
                public callback(param0: number, param1: number): void;
                public callback(data: number, pollResult: number): void;
            }
        }
    }
}

//Generics information:
//upinn.tech.upinnsecretsandroid.FfiConverter:2
//upinn.tech.upinnsecretsandroid.FfiConverterRustBuffer:1
//upinn.tech.upinnsecretsandroid.UniffiHandleMap:1
//upinn.tech.upinnsecretsandroid.UniffiRustCallStatusErrorHandler:1