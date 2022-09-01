import { isSHA256, ValidationScore, isEmail } from './';

describe('isSHA256', () => {
  it('returns `true` for values valid strings', () => {
    expect(
      isSHA256(
        '9a97983da36260110b9a4d79725381501d288a21dba7a8da93be0af0312e8b0c',
      ),
    ).toBe(true);
    expect(
      isSHA256(
        '1443e1f20fef3287734356324011fe84542416412232a4fe70d223aeec219e78',
      ),
    ).toBe(true);
  });

  it('returns `false` for values invalid strings', () => {
    expect(isSHA256('A8sa')).toBe(false);
    expect(isSHA256({})).toBe(false);
    expect(isSHA256(NaN)).toBe(false);
    expect(isSHA256('18L')).toBe(false);
  });
});

describe('ValidationScore', () => {
  it('can be initialized', () => {
    expect(new ValidationScore([], () => true)).toBeInstanceOf(ValidationScore);
    expect(new ValidationScore([], () => true, true)).toBeInstanceOf(
      ValidationScore,
    );
    expect(new ValidationScore([], () => true, false)).toBeInstanceOf(
      ValidationScore,
    );
    expect(new ValidationScore([], isSHA256, false)).toBeInstanceOf(
      ValidationScore,
    );
  });

  it('can return a score for a fully populated array', () => {
    expect(
      new ValidationScore<string>(
        [
          '9a97983da36260110b9a4d79725381501d288a21dba7a8da93be0af0312e8b0c',
          '1443e1f20fef3287734356324011fe84542416412232a4fe70d223aeec219e78',
        ],
        isSHA256,
      ).validate(),
    ).toBe(1);

    expect(
      new ValidationScore<string>(
        [
          '9a97983da36260110b9a4d79725381501d288a21dba7a8da93be0af0312e8b0c',
          'polly-wog-stew',
        ],
        isSHA256,
      ).validate(),
    ).toBe(0.5);
  });

  it('can return a score for an array with nulls', () => {
    expect(
      new ValidationScore<string>(
        [
          '9a97983da36260110b9a4d79725381501d288a21dba7a8da93be0af0312e8b0c',
          '1443e1f20fef3287734356324011fe84542416412232a4fe70d223aeec219e78',
          null,
        ],
        isSHA256,
      ).validate(),
    ).toBe(1);

    expect(
      new ValidationScore<string>(
        [
          '9a97983da36260110b9a4d79725381501d288a21dba7a8da93be0af0312e8b0c',
          'polly-wog-stew',
          null,
        ],
        isSHA256,
      ).validate(),
    ).toBe(0.5);

    expect(
      new ValidationScore<string>(
        [
          '9a97983da36260110b9a4d79725381501d288a21dba7a8da93be0af0312e8b0c',
          '1443e1f20fef3287734356324011fe84542416412232a4fe70d223aeec219e78',
          null,
          null,
        ],
        isSHA256,
        false,
      ).validate(),
    ).toBe(0.5);
  });

  it('Can handles values of the wrong type passed to it', () => {
    expect(new ValidationScore<number>([1, 2, 3], isSHA256).validate()).toBe(0);
    expect(new ValidationScore<unknown>([1, 2, 3], isSHA256).validate()).toBe(
      0,
    );
    expect(new ValidationScore([1, 2, 3], isSHA256).validate()).toBe(0);
  });
});

describe('isEmail', () => {
  it('returns `true` for values valid strings', () => {
    expect(isEmail('testing@mgail.com')).toBe(true);
    expect(isEmail('abc@def.io')).toBe(true);
  });

  it('returns `false` for values invalid strings', () => {
    expect(isEmail('A8sa')).toBe(false);
    expect(isEmail({})).toBe(false);
    expect(isEmail(NaN)).toBe(false);
    expect(isEmail('18L')).toBe(false);
    expect(isEmail('a@b')).toBe(false);
    expect(isEmail('b.d')).toBe(false);
  });
});
