# Basic JS by Building a Role Playing Game

<script></script> element [is used to load JavaScript into your HTML file]  
*Example:*
```html
<script>
  // JavaScript code goes here
</script>
```

**`src` attribute** to load external file:  
```html
<script src="./script.js"></script>
```

## Developer Console

Open with:
- Windows/Linux: `F12` or `Ctrl+Shift+I`
- Mac: `Option + ⌘ + C`
- Or use the built-in Console button above the preview.

Use it to view errors and inspect variables.

## HTML Interaction and DOM

- **`<span></span>`** element: inline container.
- JavaScript uses the **Document Object Model (DOM)** to interact with HTML.
- Use `document.querySelector()` with a CSS selector to find elements.  
  ```js
  let h1 = document.querySelector("h1");
  let button1 = document.querySelector("#button1");
  ```

### Show/Hide Elements and Cursor

- **CSS**:
  ```css
  display: none; /* hide element */
  cursor: pointer; /* pointer cursor */
  ```

## Button Clicks

- Buttons have an `onclick` property.  
  ```js
  button.onclick = myFunction;
  ```
- **`innerText`** property controls text inside an element.  
  ```html
  <p id="info">Demo content</p>
  ```
  ```js
  const info = document.querySelector("#info");
  info.innerText = "Hello World";
  ```

- Escape quotes in strings with `\`.  
  ```js
  const escapedString = "Naomi likes to play \"Zelda\" sometimes.";
  ```

## Functions and Repetition

Repetition in code suggests creating functions to reuse logic.

## Objects

- Objects store key-value pairs (mutable, non-primitive).  
  ```js
  const obj = {
    name: "Quincy Larson"
  };
  ```
- Keys with spaces require quotes:  
  ```js
  const spaceObj = {
    "Space Name": "Kirk"
  };
  ```
- Access properties:
  - Dot notation: `obj.name`
  - Bracket notation: `spaceObj["Space Name"]`

## Inline Styles via JS

Change CSS inline styles:
```js
const paragraph = document.querySelector('p');
paragraph.style.display = 'block';
```

## Math Utilities

- **`Math.random()`**: random number [0,1)  
- **`Math.floor()`**: round down  
- Random 1–5:  
  ```js
  Math.floor(Math.random() * 5) + 1;
  ```
- Example in RPG context:
  ```js
  monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
  ```

## innerHTML

Modify HTML content:
```js
document.querySelector("#demo").innerHTML = "Hello, innerHTML!";
```

## Ternary Operator

One-line conditional:
```js
condition ? expressionIfTrue : expressionIfFalse
```
```js
// if-else
if (score > 0) {
  return score;
} else {
  return default_score;
}
// ternary
return score > 0 ? score : default_score;
```

## Logical Operators

- **OR (`||`)**: returns first truthy value or second if first is falsy.  
  ```js
  num < 10 || num > 20
  ```
- **AND (`&&`)**: true if both operands truthy.

## Array includes()

Check for presence:
```js
const numbersArray = [1, 2, 3, 4, 5];
const number = 3;
if (numbersArray.includes(number)) {
  console.log("The number is in the array.");
}
