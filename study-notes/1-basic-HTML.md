## freeCodeCamp → «Responsive Web Design» (Basic HTML)

### HTML file structure

```html
<html>
  <body>
    <main>
      ..
    </main>
  </body>
</html>
```

---

### `<img>` Element

- **Void element** (an opening tag without a closing tag)
- **`src` attribute**
  - *Example:*
    ```html
    <img src="https://cdn.freecodecamp.org/platform/universal/fcc_secondary.svg">
    ```
- **`alt` attribute**
  - *Example:*
    ```html
    <img src="cat.jpg" alt="A cat">
    ```

---

### Anchor (`<a>`) Element

- *Example:*
  ```html
  <a href="https://www.freecodecamp.org"></a>
  ```
- **`target` attribute** [specifies where to open the linked document]
  - `target="_blank"` [opens the linked document in a new tab or window]
  - *Examples:*
    ```html
    <a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a>
    <a target="_blank" href="https://freecatphotoapp.com">
    ```

---

### `section` Element

Used to define sections in a document, such as chapters, headers, footers, or any other sections of the document.

---

### Lists

- **`<ul>`** element [unordered list of items]
- **`<ol>`** element [ordered list of items – numbered when displayed]
- **`<li>`** element [create a list item in an ordered or unordered list]
  - *Example:*
    ```html
    <ul>
      <li>milk</li>
      <li>cheese</li>
    </ul>
    ```

---

### `figure` and `figcaption` Elements

- **`<figure>`** element [represents self-contained content and allows you to associate an image with a caption]
- **`<figcaption>`** element [a figure caption is used to add a caption to describe the image contained within the `<figure>` element]
  - *Example:*
    ```html
    <figure>
      <img src="image.jpg" alt="A description of the image">
      <figcaption>A cute cat</figcaption>
    </figure>
    ```

---

### Emphasis

- **`<em>`** element [to place emphasis on a specific word or phrase]
- **`<strong>`** element [to indicate that some text is of strong importance or urgent]

---

## Forms

### `<form>` Element

[Used to get information from a user like their name, email, and other details]

- **`action` attribute** [indicates where form data should be sent]
  - *Example:*
    ```html
    <form action="/submit-url"></form>
    ```

### `<input>` Element

- **Void element** [allows you several ways to collect data from a web form]
- **`type` attribute** [you can easily create a password field, reset button, or a control to let users select a file from their computer]
  - *Example:*
    ```html
    <input type="text">
    ```
- **`name` attribute** [in order for a form’s data to be accessed by the location specified in the `action` attribute, you must give the text field a `name` attribute and assign it a value to represent the data being submitted]
  - *Example:*
    ```html
    <input type="text" name="name">
    ```
- **`placeholder` attribute** [placeholder text is used to give people a hint about what kind of information to enter into an input]
  - *Example:*
    ```html
    <input type="text" name="catphotourl" placeholder="cat photo URL">
    ```
- **`required` attribute** [to prevent a user from submitting your form when required information is missing]

### `<button>` Element

[Used to create a clickable button]

- *Examples:*
  ```html
  <button>Submit</button>
  <button type="submit">Submit</button>
  ```

---

### Radio Buttons

[For questions where you want only one answer out of multiple options]

- *Example:*
  ```html
  <input type="radio"> cat
  ```

> “If you select the Indoor radio button and submit the form, the form data for the button is based on its `name` and `value` attributes.”

- **`name` attribute** [to make it so selecting one radio button automatically deselects the other, both buttons must have a `name` attribute with the same value]
  - *Example:*
    ```html
    <input type="radio" name="meal"> Breakfast
    <input type="radio" name="meal"> Lunch
    ```
- **`value` attribute** [optional, best practice to include it with any checkboxes or radio buttons on the page]

### Checkboxes

- *Example:*
  ```html
  <input type="checkbox"> cat
  ```

> “Adding the `name` attribute makes it easier for a server to process your web form, especially when there are multiple checkboxes.”

- **`checked` attribute** [to make a checkbox checked or radio button selected by default]
  - *Example:*
    ```html
    <input checked type="radio" name="meal" value="breakfast"> Breakfast
    ```

---

## Labels and Fieldsets

- **`<label>`** elements [used to help associate the text for an input element with the input element itself (especially for assistive technologies like screen readers)]
  - *Example:*
    ```html
    <label><input type="radio"> cat</label>
    ```
    In the example, clicking on the word “cat” will also select the radio button.

- **`id` attribute** [used to identify specific HTML elements. Each `id` attribute’s value must be unique from all other `id` values on the entire page]
  - *Example:*
    ```html
    <input id="email">
    ```

- **Another way to use `<label>`**  
  - **`for` attribute** with the same value as the input element’s `id` attribute
    - *Example:*
      ```html
      <input id="loving" type="checkbox">
      <label for="loving">Loving</label>
      ```

- **`<fieldset>`** block-level element [used to group related inputs and labels together in a web form]
- **`<legend>`** element [acts as a caption for the content in the `<fieldset>` element]

---

## Document Metadata

- **`<footer>`** element [typically contains information about the author of the document, copyright data, links to terms of use, contact information, and more]
- **`<head>`** element [contains metadata about the document, such as its title, links to stylesheets, and scripts. Metadata is information about the page that isn’t displayed directly on the page]
- **`<title>`** element [determines what browsers show in the title bar or tab for the page]
  - *Example:*
    ```html
    <title>CatPhotoApp</title>
    ```

- **Meta Elements**  
  You can set browser behavior by adding `<meta>` elements in the `<head>`  
  - *Example:*  
    ```html
    <meta attribute="value">
    ```
- **`charset` attribute** [tells the browser how to encode characters for the page]
  - *Example:*
    ```html
    <meta charset="utf-8">
    ```

- **`<html>`** element [is the root element of an HTML page and wraps all content on the page]
  - **`lang` attribute** [specifies the language of the page]
    - *Example:*
      ```html
      <html lang="en">
      ```

---

All pages should begin with `<!DOCTYPE html>`  
This special string is known as a declaration and ensures the browser tries to meet industry-wide specifications.  
`<!DOCTYPE html>` tells browsers that the document is an HTML5 document, which is the latest version of HTML.
