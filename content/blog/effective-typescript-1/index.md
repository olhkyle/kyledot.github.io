---
title: Effective TypeScript 1
date: '2023-06-27'
description: 'This is a written summary based on my understanding after reading "Effective TypeScript"'
category: 'TypeScript'
---

> The following text is a summary based on my understanding after reading "**Effective `TypeScript`**"

## 1. Relationship Between TypeScript and JavaScript

`TypeScript` is a unique language in terms of its usage. It ultimately compiles into `JavaScript` and is executed as `JavaScript`.

In terms of its type system, `TypeScript` is different from other languages.

> 💿 You may have often heard the statement, "`TypeScript` is a superset of `JavaScript` with types."

All `JavaScript` code is `TypeScript` code ➡️ **True** <br/> All `TypeScript` code is `JavaScript` code ➡️ **False**

```ts
interface City {
	name: string;
	state: string;
}

const cities: City[] = [
	{ name: 'Seattle', stete: 'Washington' },
	{ name: 'Los Angeles', state: 'California' },
	{ name: 'Atlanta', state: 'Georgia' },
];
```

In the code above, if there is a typo in the property declaration such as stete, `TypeScript`'s type checker will catch the error and prevent potential issues that may occur in the future before runtime.

Therefore, `TypeScript` programs can be seen as a superset containing both `JavaScript` programs and `TypeScript` programs that have passed type checking.

Type inference plays a crucial role in `TypeScript`, and one of the goals of `TypeScript`'s type checker (type system) is to find errors in code before runtime. This is why `TypeScript` is also referred to as a "static type language."

Thus, we can say that the type system in `TypeScript` "models" the runtime behavior of `JavaScript`.

<br/>
<br/>
<hr>

## 2. TypeScript Configuration

Where to find source files? What kinds of output to generate? You can configure `TypeScript` compilation settings through the `tsconfig.json` file using the `compilerOptions`.

```ts
// tsconfig.json

{
	"compilerOptions": {
		"noImplicitAny": true,
		"strictNullChecks": false
	}
}
```

When applying `TypeScript` to a `React` project, it's important to understand the settings for `noImplicitAny` and `strictNullChecks`.

<br/>

#### 1. noImplicitAny

```ts
const func = (a, b) => a + b;
```

If `noImplicitAny` is set to `false`, the type checker will not show any errors. However, if `noImplicitAny` is set to `true`, the type checker will display the following error:

Parameter `a` implicitly has an `any` type.<br/> Parameter `a` implicitly has an `any` type.

<br/>

#### 2. strictNullChecks

```ts
const a: number = null;

const b: number = undefined;
```

If `strictNullChecks` is set to false, no errors will be shown. However, if it is set to `true`, it will display the error <b>"Type `null` is not assignable to type `number`"</b> for `null` or `undefined` values.

If you intentionally want to allow `null`, you can use **tagged union types** (discriminated union types) to prevent errors:

```ts
const a: number | null = null;
```

When `strictNullChecks` is `true`, you need to use `null` checks or type assertions to prevent errors like <b>"`undefined` is not an object."</b> For example:

```ts
// null check

// 1
if ($elem) {
	$elem.textContent = 'hello';
}

// 2
render(value);

// type assertion

// 1
$elem!.textContent = 'hello';

// 2
render(value as string);
```

-> In the case of 1, since the **DOM** can be `null`, you can prevent errors by checking for `null` or using **type assertions**. In the case of 2, you can use the **"type assertion"** syntax, `as`, to prevent errors.

Therefore, it is recommended to set the `noImplicitAny` option to `true`, except when converting a `JavaScript` project to `TypeScript`. And to prevent runtime errors like <b>"`undefined` is not an object,"</b> it is recommended to set the `strictNullChecks` option to `true`.

Additionally, to prevent errors through strict type checking in `TypeScript`, it is recommended to set the strict option to true.

<br/>
<br/>
<hr>

## 3. Understanding Code Generation and Irrelevance of Types at Runtime

### The TypeScript compiler performs the following tasks:

**Transpiling (translating + compiling)** the latest `JavaScript`/`TypeScript` code to an older version of `JavaScript` so that it can run in browsers. Checking for type errors in the code. → These two tasks are completely independent. Transpiling `TypeScript` to `JavaScript` does not affect the types in the code at all.

> 💿 This means that code with type errors can still be compiled. It is more accurate to say that if there are type errors, there are errors in type checking.

> 💿 Type checking is not possible at runtime. In fact, during the compilation process when code is translated into `JavaScript`, all type declaration statements such as `interfaces` and `type aliases` are removed.

This indicates that code generation is independent of runtime behavior and performance. Ultimately, `TypeScript` types do not affect runtime behavior or performance.

<hr>
<br/>

To use `TypeScript` types at runtime, you can use **"tagged union types"** and **"property checking (kind) method,"** or utilize **"classes"** to provide both `TypeScript` types and runtime values.

#### 1. Tagged union types and property checking (kind) method

```ts
interface Animal {
	kind: 'animal';
	name: string;
}

interface Dog extends Animal {
	kind: 'dog';
	name: string;
}

type Content = Animal | Dog;
const callName = (content: Content) => {
	if (content.kind === 'animal') {
		content;
		return `this is ${content} type`;
	} else if (content.kind === 'dog') {
		content;
		return `this is ${content} type`;
	}
};
```

#### 2. Class + instanceof usage

```ts
class Triangle {
	constructor(public width: number) {}
}

class IsoscelesTriangle {
	constructor(public width: number, public height: number) {
		super(width);
	}
}

type Shape = Triangle | IsoscelesTriangle;

const calculateArea = (shape: Shape) => {
	if (shape instanceof Triangle) {
		return (shape.width * shape.height) / 2;
	} else if (shape instanceof IsoscelesTriangle) {
		return (shape.width * shape.height) / 2;
	}
};
```

### Type operations do not affect runtime behavior.

```ts
const asNumber = (val: number | string): number => {
	return val as number;
};

asNumber(12); // 12
asNumber('12'); // 12
```

→ The above code passes the type check, but after compilation, the `TypeScript`-specific code, such as the as number type assertion, is removed, and only the `JavaScript` code remains. Therefore, the type assertion code has no impact at runtime.

Therefore, to refine values based on type definitions, you need to write code like this:

```ts
const asNumber = (val: number | string): number => {
	return typeof val === 'string' ? Number(val) : val;
};
```

💿 As a result, it is important to be cautious as runtime types and declared types can differ.

<br/>
<br/>
<hr>

## 4. Getting Familiar with Structural Typing

`JavaScript` can be considered a language based on duck typing.

> 💿 **Duck typing** is the concept of considering an object to belong to a certain type if it has the variables and methods that conform to that type.

```ts
interface Line {
	x: number;
	y: number;
}

interface NamedLine {
	name: 'string';
	x: number;
	y: number;
}

const calculateLength = (l: Line) => {
	return Math.sqrt(l.x * l.x + l.y * l.y);
};

const line1 = { x: 1, y: 2 };
const line2: NamedLine = { x: 3, y: 4, name: 'z' };

calculateLength(line1); // 2.23606797749979
calculateLength(line2); // 5
```

In the above code, even though the object has the NamedLine interface, it can be passed as an argument to `calculateLength` without any issues. `TypeScript`, even during type checking, is intelligent enough to recognize that the object has properties `x` and `y` even though they are not explicitly defined in the `Line` interface. This is known as **structural typing**.

> 💿 While writing functions, it is often assumed that the arguments used in function calls adhere strictly to the properties defined in the function's parameter type. However, in `TypeScript`, types have open properties instead of sealed properties.

<br/>
<br/>
<hr>

## 5. Avoiding the use of any Type

Using the any type undermines the type checking system provided by `TypeScript` and makes it difficult to handle various runtime errors that may occur during `JavaScript` execution after `TypeScript` compilation.

Moreover, when working collaboratively, it becomes challenging to understand the design structure of a service when any types are used extensively. Therefore, it is advisable to avoid using the any type and instead specify clear and explicit types.

<br/>
<br/>

> The above summary is based on my understanding while reading the book. If there are any additional concepts you would like me to explain, please let me know.
