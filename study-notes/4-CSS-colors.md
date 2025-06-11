# freeCodeCamp → “Responsive Web Design” (CSS Colors)

Learn CSS Colors by Building Colored Markers

---

## Linking CSS

Link **styles.css** to the HTML page by nesting a `<link>` element within the `<head>`, with:
```html
<link rel="stylesheet" href="styles.css">
```

## Margin Shorthand

Center an element by setting its margin to auto:
```css
.marker {
  margin: 10px auto;
}
```

## Multiple Classes

Add multiple classes by listing them in the `class` attribute, separated by spaces:
```html
<div class="animal dog"></div>
```
Example markers:
```html
<div class="marker one"></div>
<div class="marker two"></div>
<div class="marker three"></div>
```

## Color Functions

- **RGB**:
  ```css
  .container {
    background-color: rgb(0, 0, 0);
  }
  ```
- **Hexadecimal**:
  ```css
  /* #RRGGBB */
  background-color: #4B5320;
  ```
- **HSL** (Hue, Saturation, Lightness):
  ```css
  .blue {
    background-color: hsl(240, 100%, 50%);
  }
  ```

## Gradients

Use `linear-gradient` to create color transitions:
```css
/* syntax: linear-gradient(direction, color-stop1, color-stop2, ...); */
background: linear-gradient(90deg, red 90%, black);
```
- Creates an image; often used with `background` property.
- `direction`: e.g., `90deg`
- Color-stops: e.g., `red 90%, black`

## Opacity

Control transparency with `opacity`:
```css
opacity: 0.5;
```
Or use alpha channel in RGBA:
```css
background-color: rgba(255, 255, 255, 0.5);
```

## Borders

Separate border properties:
```css
border-left-width: 10px;
border-left-style: solid;
border-left-color: black;
```
Shorthand:
```css
border-left: 10px solid black;
```

## Box Shadow

Apply shadows with `box-shadow`:
```css
/* offsetX offsetY color */
box-shadow: 5px 5px gray;
/* offsetX offsetY blurRadius color */
box-shadow: 5px 5px 10px gray;
/* offsetX offsetY blurRadius spreadRadius color */
box-shadow: 5px 5px 10px 2px gray;
```
- `offsetX`, `offsetY`: move shadow horizontally/vertically (px or other units)
- `blurRadius`: blurs the shadow
- `spreadRadius`: expands/shrinks the shadow
