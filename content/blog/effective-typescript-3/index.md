---
title: Effective TypeScript 3
date: '2023-09-02'
description: 'This is a written summary based on my understanding after reading "Effective TypeScript.'
category: 'TypeScript'
---

> The following text is a summary based on my understanding after reading **"Effective TypeScript"**

## 14. Reducing Type Calculation using Type Manipulation and Generics

### 01 Utilize Mapped Type

```ts
interface State {
	userId: string;
	pageTitle: string;
	recentFiles: string[];
	pageContents: string;
}

interface TopNavState {
	userId: string;
	pageTitle: string;
	recentFiles: string[];
}
```

Defining `TopNavState` as subset of `State` is more **desirable** than declaring interface `State` extending `TopNavState`.

```ts
type TopNavState = {
	userId: State['userId'];
	pageTitle: State['pageTitle'];
	recentFiles: State['recentFiles'];
};
```

Like **type alias** above, if `pageTitle` property's type of `State` type is changed, modification is in need because it's also reflected in `TopNavState`.

```ts
type TopNavState = {
	[K in 'userId' | 'pageTitle' | 'recentFiles']: State[K];
};

type Pick<T, K> = { [key in K]: T[key] };
```

Like the example code above, it is the same way as **looping** through the fields an array of **Mapped Types**. This pattern can be found on the standard `TypeScript` Library, and it's called `Pick`.

### 02 `Pick` & `Mapped Type`

#### Basic use of Mapped Type

We can see that `Mapped Type` can be thought of as applying `map` method to the **Type**.

```ts
{ [ P in K ] : T }
{ [ P in K ]? : T }
{ readonly [ P in K ] : T }
{ readonly [ P in K ]? : T }
```

In terms of removing the duplicate code as **Generics**, the use of `Pick` can be compared to **calling a function**.

In **Tagged Union** as shown below, other type of duplication can happen.

```ts
interface SaveAction {
	type: 'save';
}

interface LoadAction {
	type: 'load';
}

type Action = SaveAction | LoadAction;
// type ActionType = 'save' | 'load'; // 중복 발생

type ActionType = Action['type'];

type ActionRec = Pick<Action, 'type'>;
```

### 03 If we want to define `Class` that is updated after creation?

```ts
interface Options {
	w: number;
	h: number;
	color: string;
	label: string;
}

interface OptionsUpdate {
	w?: number;
	h?: number;
	color?: string;
	label?: string;
}

class UI {
	constructor(init: Options) {
		this.init = init;
	}

	// 중복
	update(options: OptionsUpdate) {
		console.log(options);
	}

	// partial
	create(options: Partial<Options>) {
		console.log(options);
	}
}

type OptionsUpdate = { [key in keyof Options]?: Options[key] }; // Partial과 같다
type OptionsKeys = keyof Options; //
```

### 04 If we want to create **Named Type** for the **return type** of Function or Method?

> In `TypeScript`, there are two ways of defining Named Type.
>
> ➡️ type alias | interface

```ts
function getUserInfo(userId: string) {
	const color = 'red';
	const name = 'kim';
	const age = 20;

	return {
		userId,
		name,
		age,
		color,
	};
}

type UserInfo = ReturnType<typeof getUserInfo>;
/**
type UserInfo = {  
	userId: string;  
	name: string;  
	age: number;  
	color: string;  
}*/
```

#### `Generics` is a kind of `function` for a `type`.

> `Function` is useful for preserving **DRY**(Don't repeat yourself) principle. As the type system is used to limit the values that can be mapped to `parameter`s in `function`, it's necessary to limit `parameter`s in `Generics`.

The definition of `Pick` type which defined as a `Mapped Type` above results in the error like below.

```ts
type Pick<T, K> = { [key in K]: T[key] };

// Type 'K' is not assignable to type 'string | number | symbol'
```

Since `K` is not relevant to `T` type too wide a range, `K` should be `number | string | symbol` type which can be used as a **Property Key**, and should be narrowed. This can be defined as below.

```ts
type Pick<T, K extends keyof T> = { [key in K]: T[key] };
```

> If we think of **type** as a set of values, **A extends B** means that A is the subset of B.

<br/>
<br/>
<hr/>

## 15. Use of Dynamic Data and `Index Signature`

### 01 Index Signature

```ts
type Rocket = { [property: string]: string };

const rocket: Rocket = {
	name: 'naroho',
	version: 'v1.0',
	thrust: '4,940 KN',
};
```

Like above, `[property: string] : string` is called `Index Signature`. It contains 3 pieces of information.

- `Key` Name : It's used to show the position of `key`. And It's reference that can be ignored because it's not used by **type checker**.
- `Key` Type : It should be combination of `string | number | symbol`.
- `Value` Type : It can be **any type** being used in JavaScript.

<br/>
<br/>
<br/>

But, there are **4 disadvantages** to type checking like above.

1. **Type Checker** allows all key types including wrong key. Instead of using `name`, using `Name` with PascalCase can be valid type.
2. **Specific Key** is not necessary. `{}` value can be allocated on variable.
   ```ts
   const emptyObj: Rocket = {};
   ```
3. Different Types are not allowed for different Keys. Property `thrust` type is not `string` type but `number` type.
4. The `key` can be named anything, so **Autocomplete** doesn't work in the IDE.

Because of disadvantages like above, Index Signature is not exact. So It could be better to defined type using `interface`.

<br/>
<br/>

However, if we are representing **dynamic data**, `Index Signature` is useful.

```ts
function parseCSV(data: string): { [columnName: string]: string }[] {
	const lines = data.split('\n');
	const [header, ...rows] = lines;
	const headerColumns = header.split(',');

	return rows.map(rowStr => {
		const row: { [columnName: string]: string } = {};

		rowStr.split(',').forEach((cell, i) => {
			row[headerColumns[i]] = cell;
		});

		return row;
	});
}
```

Above, there is a **CSV file** where the **row**s have **column** names, and we want to represent the rows of data as an object that maps column names to values. In a typical situation, there is no way to know in advance what the column names are, so we use `Index Signature`.

On the other hand, if `parseCSV` is used in a specific situation where you do know the column names, you'll use **assertion** as a pre-declared type.

```ts
interface ProductRow {
	productId: string;
	name: string;
	price: string;
}
declare let csvData: string;

const products = parseCSV(csvData) as unknown as ProductRow[];
```

At **runtime**, there may not actually be a value corresponding to a property key of the `ProductRow` type, so `undefined` type can be used in conjunction with the union type for a safer approach, and at the same time to **proactively** prevent errors from the **compilation** stage.

```ts
function safeParseCSV(data: string): { [columnName: string ]: string | undefined }{
	...
}
```

Also, if we don't know how many **property** keys will exist in our `ProductRow` type, it may be best to define them as **Optional Fields** or **Union Types**.

```ts
interface ProductRow1 {
	[column: string]: string;
}

interface ProductRow2 {
	productId?: string;
	name?: string;
	price?: string;
}

// prettier-ignore
type ProductRow3 = 
	| { productId: string } 
	| { productId: string; name: string } 
	| { productId: string; name: string; price: string } 
	| { productId: string; name: string; price: string; color: string };
```

The way like `ProductRow3` might be more accurate, but it's very **hassle** to use. So, if we use `Record` Type, we can declare type more accurate and flexible.

```ts
type ProductRow = Record<'productId' | 'name' | 'price', string>;
```

Or, we can utilize `Mapped Type`.

```ts
type ProductRow = { [key in 'productId' | 'name' | 'price']: string };

type ProductRowOption = { [key in 'productId' | 'name' | 'price']: key extends 'name' ? string : number };
```

> When representing **Dynamic Data**, use `Index Signature` and, if possible, define types more precisely using `interface`, `Record`, and `Mapped Type`.

<br/>
<br/>
<br/>
<br/>
