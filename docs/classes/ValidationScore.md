[[libraryNameWithSpacesAndUpperCases]](../README.md) / ValidationScore

# Class: ValidationScore<T\>

## Type parameters

| Name |
| :------ |
| `T` |

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

| Name | Type | Default value |
| :------ | :------ | :------ |
| `values` | (``null`` \| `T`)[] | `undefined` |
| `validator` | (`value`: `unknown`) => `boolean` | `undefined` |
| `ignoreNull` | `boolean` | `true` |

#### Defined in

[index.ts:16](https://github.com/NJordan72/polly-wog-stew/blob/0b79a52/src/index.ts#L16)

## Properties

### ignoreNull

• `Readonly` **ignoreNull**: `boolean` = `true`

#### Defined in

[index.ts:19](https://github.com/NJordan72/polly-wog-stew/blob/0b79a52/src/index.ts#L19)

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

[index.ts:18](https://github.com/NJordan72/polly-wog-stew/blob/0b79a52/src/index.ts#L18)

___

### values

• `Readonly` **values**: (``null`` \| `T`)[]

#### Defined in

[index.ts:17](https://github.com/NJordan72/polly-wog-stew/blob/0b79a52/src/index.ts#L17)

## Methods

### validate

▸ **validate**(): `number`

#### Returns

`number`

#### Defined in

[index.ts:22](https://github.com/NJordan72/polly-wog-stew/blob/0b79a52/src/index.ts#L22)
