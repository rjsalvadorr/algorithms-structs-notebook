# Modules

By default, Node.js treats JavaScript code as CommonJS modules. CommonJS modules are characterized by the require() statement for module imports and module.exports for module exports.

For example, this is a CommonJS module that exports two functions:

```javascript
module.exports.add = function(a, b) {
        return a + b;
} 

module.exports.subtract = function(a, b) {
        return a - b;
} 
```

We can also import the public functions into another Node.js script using `require()`, just as we do here:

```javascript
const {add, subtract} = require('./util')

console.log(add(5, 5)) // 10
console.log(subtract(10, 5)) // 5
```

On the other hand, library authors can also simply enable ES modules in a Node.js package by changing the file extensions from `.js` to `.mjs`.

For example, here’s a simple ES module (with an `.mjs` extension) exporting two functions for public use:

```javascript
// util.mjs

export function add(a, b) {
        return a + b;
}

export function subtract(a, b) {
        return a - b;
}
```

We can then import both functions using the import statement:

```javascript
// app.mjs

import {add, subtract} from './util.mjs'

console.log(add(5, 5)) // 10
console.log(subtract(10, 5)) // 5
```

Another way to enable ES modules in your project can be done by adding a `"type: module"` field inside the nearest `package.json` file (the same folder as the package you’re making):

```json
{
  "name": "my-library",
  "version": "1.0.0",
  "type": "module",
  // ...
}
```

With that inclusion, Node.js treats all files inside that package as ES modules, and you won’t have to change the file to `.mjs` extension.

Alternatively, you can install and set up a transpiler like Babel to compile your ES module syntax down to CommonJS syntax. Projects like React and Vue support ES modules because they use Babel under the hood to compile the code.

---

## Using ES6 Modules in Browsers

At the time of writing, ES6 modules are supported in Chromium-based browsers (v63+), Safari 11+, and Edge 16+. Firefox support will arrive in version 60 (it’s behind an about:config flag in v58+).

Scripts which use modules must be loaded by setting a type="module" attribute in the `<script>` tag. For example:

```html
<script type="module" src="./main.js"></script>
```

or inline:

```html
<script type="module">
  import { something } from './somewhere.js';
  // ...
</script>
```

Modules are parsed once, regardless of how many times they’re referenced in the page or other modules.

## Should You Use Modules in the Browser?

Browser support is growing, but it’s possibly a little premature to switch to ES6 modules. For the moment, it’s probably better to use a module bundler to create a script that works everywhere.



&nbsp;

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
- https://www.sitepoint.com/understanding-es6-modules/
- https://blog.logrocket.com/commonjs-vs-es-modules-node-js/
- https://reflectoring.io/nodejs-modules-imports/
