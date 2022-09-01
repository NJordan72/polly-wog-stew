import { validate } from 'email-validator';

export function isEmail(value: unknown): boolean {
  return typeof value === 'string' && validate(value);
}

export function isSHA256(value: unknown): boolean {
  return (
    typeof value === 'string' &&
    value.length === 64 &&
    RegExp(/^[A-Fa-f0-9]{64}$/).test(value)
  );
}

export class ValidationScore<T> {
  constructor(
    public readonly values: Array<T | null>,
    public readonly validator: (value: unknown) => boolean,
    public readonly ignoreNull: boolean = true,
  ) {}

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
