export declare function isEmail(value: unknown): boolean;
export declare function isSHA256(value: unknown): boolean;
export declare class ValidationScore<T> {
    readonly values: Array<T | null>;
    readonly validator: (value: unknown) => boolean;
    readonly ignoreNull: boolean;
    constructor(values: Array<T | null>, validator: (value: unknown) => boolean, ignoreNull?: boolean);
    validate(): number;
}
//# sourceMappingURL=index.d.ts.map