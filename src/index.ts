import { validate } from 'email-validator';

/**
 * Returns if a string is a valid email
 *
 * @param value The value to validate
 * @returns `true` if we think it is an email otherwise `false`
 */
export function isEmail(value: unknown): boolean {
  return typeof value === 'string' && validate(value);
}

/**
 * Returns if a string is a valid hex encoded sha256 hash
 *
 * @param value The value to validate
 * @returns `true` if we think it is a sha256 otherwise `false`
 */
export function isSHA256(value: unknown): boolean {
  return (
    typeof value === 'string' &&
    value.length === 64 &&
    RegExp(/^[A-Fa-f0-9]{64}$/).test(value)
  );
}

/**
 * A class that handles non boolean validation scores.
 *
 * @typeParam T The type that we're trying to validate
 */
export class ValidationScore<T> {
  /**
   * @param values The values to validate
   * @param validator A function that will act as the validator
   * @param ignoreNull Defines if we should ignore null values in our final score
   */
  constructor(
    public readonly values: Array<T | null>,
    public readonly validator: (value: unknown) => boolean,
    public readonly ignoreNull: boolean = true,
  ) {}

  /**
   * Returns a number betwen 0-1 representing the percentage of values that are valid
   *
   * @returns the percentage of values that are valid
   */
  validate(): number {
    const cleanedValues = this.ignoreNull
      ? this.values.filter((v) => v !== null)
      : this.values;

    return (
      cleanedValues.reduce((score, value) => {
        if (this.ignoreNull && value === null) {
          return score;
        }
        return this.validator(value) ? score + 1 : score;
      }, 0) / cleanedValues.length
    );
  }
}
