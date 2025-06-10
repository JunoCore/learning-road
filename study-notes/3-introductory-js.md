# freeCodeCamp → «JavaScript Algorithms & Data Structures»

Introductory JS by Building a Pyramid Generator

---

## Variables

Variable naming rules:
- Can include letters, numbers, dollar signs (`$`), and underscores (`_`)
- Cannot contain spaces
- Must not begin with a number

### Declaring and Initializing

- **`let`** keyword to declare a variable  
  ```js
  let character;
  ```
- Initialization (assigning value at declaration)  
  ```js
  let character = "Hello";
  ```

## Primitive Data Types

JavaScript has seven primitive data types. Example: **String**

- Strings represent sequences of characters in single or double quotes  
- Immutable (value cannot be changed once created)  
- Variables can be reassigned new string values  

```js
let greeting = 'Hello';
console.log(greeting);
```

## Naming Conventions

- **Camel case** for multi-word variable names  
  ```js
  let variableOne;
  let secondVariable;
  ```
- Uninitialized variables have default value of `undefined`

## Numbers and Arrays

- Numbers are used without quotes  
- Arrays are denoted with square brackets `[]`  
  ```js
  let rows = [];
  let rows = ["Naomi", "Quincy", "CamperChan"];
  console.log(rows[0]); // access first element
  ```
- Array **mutation**: change elements directly  
  ```js
  rows[rows.length - 1] = 10;
  ```

## Array Methods

- **`.push()`**: add value to end; returns new length  
  ```js
  rows.push("freeCodeCamp");
  ```
- **`.unshift()`**: add value to start; returns new length  
  ```js
  const countDown = [2, 1, 0];
  const newLength = countDown.unshift(3);
  console.log(countDown); // [3, 2, 1, 0]
  console.log(newLength); // 4
  ```
- **`.pop()`**: remove and return last element  
  ```js
  let popped = rows.pop();
  console.log(popped);
  ```
- **`.shift()`**: remove and return first element  
  ```js
  const numbers = [1, 2, 3];
  numbers.shift();
  ```

- `.length` property returns number of elements  

## Constants

- **`const`** variables cannot be reassigned and must be initialized on declaration

---

## Loops

### `for` Loop

```js
for (let i = 0; i < count; i = i + 1) {
  // logic
}
```
- **Iterator**: loop counter variable  
- **Condition**: when false, loop stops  
- **Iteration**: update iterator each cycle  

### `for...of` Loop

Iterates over iterable objects:

```js
for (const value of iterable) {
  // logic
}
```

## Strings

- Concatenation with `+`:  
  ```js
  hello = hello + " World";
  ```
- Escape sequence `\n` for new lines  
- **`.repeat(n)`**: repeat string `n` times  
  ```js
  const activity = "Code! ";
  activity.repeat(3);
  ```
- Beware off-by-one errors

---

## Functions

### Declaration

```js
function name(parameter) {
  // function body
}
```

### Calling

```js
function test() {
}
test();
```

- All functions return a value (default `undefined`)  
- Use **`return`** to return custom values; code after return doesn't execute  

### Parameters

```js
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(5, 10);
console.log(sum);
```

## Scope

- **Global scope**: variables declared outside blocks  
- **Local/block scope**: variables declared inside functions or loops  

---

## Operators and Shorthand

- **Addition assignment** `+=`:  
  ```js
  test = test + 1;
  test += 1;
  ```
- **Increment** `++`:  
  ```js
  let test = 7;
  test++;
  ```
- **Subtraction assignment** `-=`:  
  ```js
  i -= 1;
  ```
- **Decrement** `--`: subtracts 1  
  ```js
  i--;
  ```

## Conditionals

### `if` Statement

```js
if (condition) {
  // logic
}
```
- `"false"` (string) is truthy  
- Falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`

### `else if` and `else`

```js
if (cond1) {
  // ...
} else if (cond2) {
  // ...
} else {
  // ...
}
```

### `while` Loop

```js
while (condition) {
  // logic
}
```

---

## Equality

- **Loose equality** `==` can coerce types (`"0" == 0` is true)  
- **Strict equality** `===` checks value and type (`"0" === 0` is false)  
- **Strict inequality** `!==` checks not equal or type mismatch
