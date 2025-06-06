# freeCodeCamp → “Responsive Web Design” (Basic CSS)

Learn Basic CSS (Cascading Style Sheets) by Building a Cafe Menu

---

### `<style></style>` Element

- Placed within the `<head>` element.
- Alternatively, use a separate **styles.css** file.
- To link the CSS file, use the `<link>` void element with:
  - `rel="stylesheet"`
  - `href="styles.css"`
  - *Example:*
    ```html
    <link rel="stylesheet" href="styles.css">
    ```

---

## Adding Styles to Elements

You can add style rules inside a `<style>` block or in an external CSS file:

```css
element {
  property: value;
}
```

To apply the same group of styles to multiple selectors, separate them with commas:

```css
h1, h2, p {
  text-align: center;
}
```

---

## ID and Class Selectors

- **ID Selector**  
  Targets a specific element with an `id` attribute. Prefix the ID value with `#`.  
  *Example:*
  ```css
  #cat {
    width: 250px;
  }
  ```
  ```html
  <div id="cat">…</div>
  ```

- **Class Selector**  
  Prefix the class name with a dot (`.`). More common for styling multiple elements.  
  *Example:*
  ```css
  .menu {
    /* styles */
  }
  ```
  ```html
  <div class="menu">…</div>
  ```

---

## Mobile-Friendly Viewport

To ensure styling looks similar on mobile and desktop, include this meta tag in the `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## Common Layout Elements

- **`<div></div>` Element**  
  Used primarily for layout purposes.
  - Can use `id` or `class` to target it.
  - *Example:*
    ```html
    <div id="menu">
      …
    </div>
    ```

- **`<article></article>` Element**  
  Contains related content grouped together.
  - *Example:*
    ```html
    <article>
      <p>French Vanilla</p>
      <p>3.00</p>
    </article>
    ```

To make all `<p>` elements inside an element with class `.item` behave like inline-block:

```css
.item p {
  display: inline-block;
}
```

To make all `<img>` elements behave like block-level elements:

```css
img {
  display: block;
}
```

---

## `<hr>` Void Element

Displays a horizontal divider between sections:

```html
<section>
  <h2>Things cats love</h2>
  <hr>
  <p>Cats love lasagna.</p>
</section>
```

---

## CSS Comments

Comments use the syntax `/* comment */`:

```css
/* background-color: burlywood; */
```

---

## Common CSS Properties

- **`text-align`**  
  Aligns text inside an element.  
  *Example:*
  ```css
  h1 {
    text-align: center;
  }
  ```

- **`background-color`**  
  Sets the background color of an element.  
  *Example:*
  ```css
  body {
    background-color: brown;
  }
  ```

- **`width`**  
  Defines the width of an element.  
  *Example:*
  ```css
  #cat {
    width: 250px; /* fallback: width: 80%; */
  }
  ```

- **`margin` vs. `padding`**  
  - **Margin:** space outside the element.  
  - **Padding:** space inside the element.  
  Browsers have default top margin for headings (`<h1>`, `<h2>`).

- **Centering with `margin-left` and `margin-right`**  
  ```css
  #menu {
    width: 80%;
    background-color: burlywood;
    margin-left: auto;
    margin-right: auto;
  }
  ```

- **Negative Margin**  
  Values begin with a minus sign.  
  *Example:*
  ```css
  img {
    margin-top: -25px;
  }
  ```

- **Padding Properties**  
  Adds space inside the element.  
  *Examples:*
  ```css
  .menu {
    padding-left: 20px;
    padding-right: 20px;
  }
  /* or shorthand */
  .menu {
    padding: 20px;
  }
  ```

- **`background-image`**  
  Sets a background image.  
  *Example:*
  ```css
  body {
    background-image: url(https://cdn.freecodecamp.org/curriculum/css-cafe/beans.jpg);
  }
  ```

- **`display` Property**  
  Controls how an element is displayed.  
  *Example:*
  ```css
  .item p {
    display: inline-block;
  }
  ```

- **`max-width`**  
  Sets the maximum width an element can grow to.  
  *Example:*
  ```css
  img {
    max-width: 500px;
  }
  ```

- **`font-family`**  
  Defines the font for text. Include fallback fonts separated by commas.  
  *Example:*
  ```css
  h1, h2 {
    font-family: Impact, serif;
  }
  ```

- **`font-style`**  
  Sets font style (e.g., italic).  
  *Example:*
  ```css
  .established {
    font-style: italic;
  }
  ```

- **`font-size`**  
  Defines the size of the font.  
  *Example:*
  ```css
  h1 {
    font-size: 30px;
  }
  ```

- **`height`**  
  Specifies the height of an element.  
  *Example:*
  ```css
  hr {
    height: 3px;
  }
  ```

- **`border-color`**  
  Sets the color of an element’s border. Each side can have a different color or all the same.  
  *Example:*
  ```css
  hr {
    border-color: brown;
  }
  ```

- **`border-width`**  
  Controls the thickness of an element’s border.

- **`color`**  
  Sets the text color.  
  *Example:*
  ```css
  a {
    color: black;
  }
  ```

---

## Link Pseudo-Selectors

- **`a:visited`**  
  Styles links after they have been visited.  
  ```css
  a:visited {
    /* property: value; */
  }
  ```

- **`a:hover`**  
  Styles links when the mouse hovers over them.  
  ```css
  a:hover {
    /* property: value; */
  }
  ```

- **`a:active`**  
  Styles links when they are being clicked.  
  ```css
  a:active {
    /* property: value; */
  }
  ```
