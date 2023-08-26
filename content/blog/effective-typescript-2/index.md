---
title: Effective TypeScript 2
date: '2023-07-08'
description: 'This is a written summary based on my understanding after reading "Effective TypeScript.'
category: 'TypeScript'
---

> The following text is a summary based on my understanding after reading **"Effective TypeScript"**

## 6. Search Type System using IDE

IDE means code editor, and **vscode** support `Typescript` tooling especially. And **vscode** is 90% made up of `Typescript`, if we check out the **vscode** repository.

It's really nice to understand how Type System works using code editor(vscode), and how `TypeScript` infers types. Additionally, we have to check out `d.ts` file to get to know how `TypeScript` works.

<br/>
<br/>
<hr>

## 7. Think of Type as set of values

`JavaScript` is called as **Dynamic Type Language** which type is set on runtime dynamically. In a type-checking system with a type checker, the moment it checks for errors before compiling `TypeScript` code, it has something called a "**type**".

It had better to say type as set of assignable values.

#### 1. smallest set : the union

```ts
const x: never = 12;
```

It's impossible to assign the value on variable `x`, because the range of value which is declared as `never` type is the union.

#### 2. Second smallest set: type that contains only one value - Unit Type or Literal Type

```ts
type A = 'A';

type B = 'B';

type Twelve = 12;
```

#### 3. Third smallest set: Union Type

```ts
type AB12 = 'A' | 'B' | 12;
```

Like the type above, `AB12` type can be the union using `Union Type`.

> 💿 We may see the phrase "assignable" in `Typescript` errors. As a perspective of Collection, this phrase can be understood as subsets of ~ (types and their relationships) or elements of ~ (values - their relationships).

#### 4. Fourth smallest set : Structural Typing with Interface

```ts
interface Person {
	name: string;
}
```

**Structural Typing Ruleset** has not 'sealed' property which means some value can possess other values, but 'open/public' property

For example, `&` operator means **'Intersection'** of 2 types.

```ts
interface Person {
	name: string;
}

interface LifeSpan {
	birth: Date;
	death?: Date;
}

type PersonSpan = Person & LifeSpan;
```

Since the 2 interfaces above don't have properties in common, we might think of `PersonSpan` type as the union such as `never` type.

But, since a type declaration with **Type Alias** applies to a set of values rather than **Interface** property, values with additional properties can also be considered to be part of the set of the type. Thus, **Intersection type** that has the name, birth, and death properties would be part of the type Intersection.

```ts
const person: PersonSpan = {
	name: 'Kim',
	birth: new Date('1912/06/23'),
	death: new Date('1954/06/07'),
};
```

It would seem that applying the above features to unionize an inteface type would result in the result of an Intersection, but this is not the case.

```ts
type K = keyof (Person | LifeSpan); // never 타입
```

<br/>

A common way to declare the above `PersonSpan` type is to utilize `extends` keyword to create subtypes, which in the context of a set is to create a subset.

```ts
interface Person {
	name: string;
}

interface LifeSpan extends Person {
	birth: Date;
	death?: Date;
}
```

If you think about the keyword "sub," you can create sub-classes of a class by inheriting from it using the `extends` keyword. So linguistically, we can say that there is an **inheritance** relationship, but from a set perspective, we can say that `Person` has a larger scope and that `LifeSpan` type, which has the properties of `Person`, is inside the scope of the Person type.

The `extends` keyword is also used as a constraint method in **Generic** Types: it means a subset of some types.

```ts
const getValue = <K extends string>(obj: Person, key: K): boolean => {
	const value = obj.name;

	return value === key;
};
```

We can infer that `K` is some type whose scope is a subset of string by the `extends` keyword.

<br/>
<br/>
<hr>

## 8. Distinguish between symbols in type and value spaces

**Symbols** in `Typescript` exist in either type space or value space. It's important to note even if they have the same name, they can represent different things depending on which space they belong to.

```ts
interface Square {
	width: number;
	height: number;
}
const Square = (width: number, height: number): Square => ({ width, height });
```

It can be confused, because `Square` Symbol is being used to define **interface** and **constructor** function.

The code below might be even more confusing.

```ts
interface Person {
  firstName: string;
  lastName: string;
}

const p : Person = { firstName: 'gildong', lastName: 'kim' }

const email = (p: Person, subject: string, body: string): Response => {
  ...
}


type T1 = typeof p; // Person
type T2 = typeof email;  // (p: Person, subject: string, body: string) => Response

const person = typeof p; // 'object'
const e = typeof email; // 'function'
```

- As a perspective of **Type**

  - `typeof` reads a value and returns a type. A `typeof` in a type space can be used as part of a larger type, or it can be named in a type declaration syntax utilizing a **type alias**.

<br/>

- As a perspective of **Value**

  - `typeof` is the typeof operator at `JavaScript` runtime, so it returns the corresponding type as a string.

  > ☕️ At the runtime, `JavaScript` returns the runtime type such as `number, string, boolean, undefined, object, function`

The property accessor `[]` behaves the same when used as a type. Always utilize `[]` to get the type attribute of a property value that corresponds to a property key of an object.

```ts
const firstName: Person['firstName'] = p['firstName'];
```

The contents below are examples of a value space and a type space serving as different purposes.

> 💿 `This` as a value is the this keyword in `JavaScript`. <br/> 🚀 this as a type is a `TypeScript` type of `this` called polymorphic this.

> 💿 The `&` and `|` in the value are the bitwise `AND` and `OR` operators.<br/> 🚀 types are called intersection and union types.

> 💿 `const` in the value is used to declare constants. <br/> 🚀 as `const` changes in the type the inferred type of a literal or literal expression.

> 💿 As used in the value, `extends` can be used to define subclasses of a parent class. <br/> 🚀 `extends` on types can be used as a qualifier for subtypes or generic types.

> 💿 Additionally, keywords like `class` and `enum` can be used as both types and values.

<br/>
<br/>
<hr>

## 9. Using Type Declaration instead of Type Assertion

#### 1. There are 2 options to set a type and assign a value to a variable

```ts
interface Flower {
	name: string;
}

const rose: Flower = { name: 'rose' }; // 타입 선언

const forsythia = { name: 'forsythia' } as Flower; // 타입 단언
```

- A type declaration checks that the value being assigned satisfies the interface.
- A type assertion is like **telling the type checker to ignore an error** because we force a type.

#### 2. The type declaration of an arrow function can be ambiguous about the inferred type, sometimes.

```ts
const flowers = ['rose', 'forsythia', 'sunflower'].map(flower => ({ flower }));

// Type '{ flower: string; }[]' is not assignable to type 'Flower[]'.
```

As a developer, you might infer from the above that the return value is an array type which has `Flower` Interface value, but the type checker will not recognize it as an interface named `Flower`.

> ☕️ Because of the above issues, using type assertions can cause problems at runtime.

**So, we check the type by declaring the return type of the arrow function, rather than asserting the type.**

```ts
const flowers: Flower[] = ['rose', 'forsythia', 'sunflower'].map((flower): Flower => ({ name: flower }));
```

#### 3. Helpful Moment using Type Assertion

Because `Typescript` doesn't have access to the DOM, you need to actively utilize type assertions.

```ts
document.querySelector('.plus-button')!.addEventListener('click', e => {
	console.log(e.currentTarget); // document.querySelector('.plus-button')
	const button = e.currentTarget as HTMLButtonElement;
});
```

Because developers know something that `TypeScript` doesn't, developers can write type assertions with the keyword `as`.

Or, we can use `!` to assert value is not possible `null`, alternatively.

````ts
const $elem = document.getElementById('foo'); // HTMLElement | null
const $buttonElem = document.getElementById('button')!; // HTMLElement```
````

##### Reasons for using Type Assertion above the 3 examples

- #1 the `HTMLElement` type is a subtype of `HTMLElement | null`.
- #2 the type `HTMLButtonElement` is a subtype of `EventTarget`.
- #3 the type `Flower` is a subtype of `{ }`.

```ts
interface Flower {
	name: string;
}

const $body = document.body;
const $elem = $body as Flower;
// Conversion of type 'HTMLElement' to type 'Flower' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
```

As shown above, code editor is saying that it would be a mistake to convert the `HTMLElement` type to the `Flower` type. If a type assertion is intentional, utilizing the `unknown` type might be useful.

> We can say that every type is a subtype of `unknown`, so assertions with `unknown` will always work.
>
> The `unknown` type assertion allows conversion between arbitrary types, but can introduce a dangerous situation where subsequent types are unpredictable.

<br/>
<br/>
<hr>

## 10. Avoid Object Wrapper Type

`JavaScript` has the character to freely convert between **primitive** and **object** types.

```ts
'hello'.charAt(3);
```

The method called `charAt` is not a method on a value of type string.

In `JavaScript`, there's a lot of works going on internally when you use a **string value** in the code above. `JavaScript` doesn't have methods on values that are the **string primitive type**, but it does have methods on **String object types**.

When we use a method like `charAt` on **string primitive**, `JavaScript` goes through the process of wrapping the value of `string` type into a `String` object, calling the method, and finally discarding the wrapped object.

Similar to how the **string primitive** is automatically converted to a **String wrapper object**, other **object wrapper types** exist.

- `number` ↔️ `Number`
- `boolean` ↔️ `Boolean`
- `symbol` ↔️ `Symbol`
- `bigint` ↔️ `BigInt`

It will be automatically converted as shown above so that you can declare the type as shown below.

```ts
const s: String = 'hello';
const n: Number = 20;
```

In the code above, the type of the value Code eventually returns at `JavaScript` runtime is a primitive. `Typescript` allows declarations that assign a primitive type to an object wrapper.
