# Map

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

### Key equality

- Key equality is based on the _sameValueZero_ algorithm.
- NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator.
- In the current ECMAScript specification, -0 and +0 are considered equal, although this was not so in earlier drafts.

```javascript
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2
```

## Map.set()

The set() method adds or updates an element with a specified key and a value to a Map object.

### Return value

The Map object.

```javascript
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('baz'));
// expected output: undefined

////// FUNCTION SIGNATURES

set(key, value)
```

## Map.get()

The get() method returns a specified element from a Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

### Return value

The element associated with the specified key, or undefined if the key can't be found in the Map object.

```javascript
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.get('bar'));
// expected output: "foo"

console.log(map1.get('baz'));
// expected output: undefined

////// FUNCTION SIGNATURES

get(key)
```

## Map.has()

The has() method returns a boolean indicating whether an element with the specified key exists or not.

### Return value

true if an element with the specified key exists in the Map object; otherwise false.

```javascript
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.has('bar'));
// expected output: true

console.log(map1.has('baz'));
// expected output: false

////// FUNCTION SIGNATURES

has(key)

```

## Map.delete()

The delete() method removes the specified element from a Map object by key.

### Return value

true if an element in the Map object existed and has been removed, or false if the element does not exist.

```javascript
const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));
// expected result: true
// (true indicates successful removal)

console.log(map1.has('bar'));
// expected result: false

////// FUNCTION SIGNATURES

delete(key)
```

## Map.clear()

The clear() method removes all elements from a Map object.

### Return value

undefined

```javascript
const map1 = new Map();

map1.set('bar', 'baz');
map1.set(1, 'foo');

console.log(map1.size);
// expected output: 2

map1.clear();

console.log(map1.size);
// expected output: 0

////// FUNCTION SIGNATURES

clear()
```

## References

MDN -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
