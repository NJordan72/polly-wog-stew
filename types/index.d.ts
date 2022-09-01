/**
 * Returns if a string is a valid email
 *
 * @param value The value to validate
 * @returns `true` if we think it is an email otherwise `false`
 */
export declare function isEmail(value: unknown): boolean;
/**
 * Returns if a string is a valid hex encoded sha256 hash
 *
 * @param value The value to validate
 * @returns `true` if we think it is a sha256 otherwise `false`
 */
export declare function isSHA256(value: unknown): boolean;
/**
 * A class that handles non boolean validation scores.
 *
 * @typeParam T The type that we're trying to validate
 */
export declare class ValidationScore<T> {
    readonly values: Array<T | null>;
    readonly validator: (value: unknown) => boolean;
    readonly ignoreNull: boolean;
    /**
     * @param values The values to validate
     * @param validator A function that will act as the validator
     * @param ignoreNull Defines if we should ignore null values in our final score
     */
    constructor(values: Array<T | null>, validator: (value: unknown) => boolean, ignoreNull?: boolean);
    /**
     * Returns a number betwen 0-1 representing the percentage of values that are valid
     *
     * @returns the percentage of values that are valid
     */
    validate(): number;
}
//# sourceMappingURL=index.d.ts.map