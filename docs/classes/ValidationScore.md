[Polly Wog Stew](../README.md) / ValidationScore

# Class: ValidationScore<T\>

A class that handles non boolean validation scores.

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` |  |

## Table of contents

### Constructors

- [constructor](ValidationScore.md#constructor)

### Properties

- [ignoreNull](ValidationScore.md#ignorenull)
- [validator](ValidationScore.md#validator)
- [values](ValidationScore.md#values)

### Methods

- [validate](ValidationScore.md#validate)

## Constructors

### constructor

• **new ValidationScore**<`T`\>(`values`, `validator`, `ignoreNull?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `values` | (``null`` \| `T`)[] | `undefined` | The values to validate |
| `validator` | (`value`: `unknown`) => `boolean` | `undefined` | A function that will act as the validator |
| `ignoreNull` | `boolean` | `true` | Defines if we should ignore null values in our final score |

#### Defined in

[index.ts:38](https://github.com/NJordan72/polly-wog-stew/blob/529b68e/src/index.ts#L38)

## Properties

### ignoreNull

• `Readonly` **ignoreNull**: `boolean` = `true`

#### Defined in

[index.ts:41](https://github.com/NJordan72/polly-wog-stew/blob/529b68e/src/index.ts#L41)

___

### validator

• `Readonly` **validator**: (`value`: `unknown`) => `boolean`

#### Type declaration

▸ (`value`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

##### Returns

`boolean`

#### Defined in

[index.ts:40](https://github.com/NJordan72/polly-wog-stew/blob/529b68e/src/index.ts#L40)

___

### values

• `Readonly` **values**: (``null`` \| `T`)[]

#### Defined in

[index.ts:39](https://github.com/NJordan72/polly-wog-stew/blob/529b68e/src/index.ts#L39)

## Methods

### validate

▸ **validate**(): `number`

Returns a number betwen 0-1 representing the percentage of values that are valid

#### Returns

`number`

the percentage of values that are valid

#### Defined in

[index.ts:49](https://github.com/NJordan72/polly-wog-stew/blob/529b68e/src/index.ts#L49)
