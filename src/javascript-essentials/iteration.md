# Iteration

...

## Loops

### for

The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

```javascript
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// expected output: "012345678"
```

### for...in

The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

```javascript
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```

### for...of

The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

```javascript
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

### for await...of

The for await...of statement creates a loop iterating over async iterable objects as well as on sync iterables, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined async/sync iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object. This statement can only be used inside an async function.

Since the return values of async generator functions conform to the async iterable protocol, they can be looped using for await...of.

```javascript
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

### while

The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

```javascript
let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// expected output: 3
```

### do...while

The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

```javascript
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
```

&nbsp;

## Iteration protocols

As a couple of additions to ECMAScript 2015, Iteration protocols aren't new built-ins or syntax, but protocols. These protocols can be implemented by any object by following some conventions.

There are two protocols: The **iterable** protocol and the **iterator** protocol.

### The iterable protocol

The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a `for...of` construct.

In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a `@@iterator` key which is available via constant `Symbol.iterator`

Whenever an object needs to be iterated (such as at the beginning of a `for...of` loop), its `@@iterator` method is called with no arguments, and the returned iterator is used to obtain the values to be iterated.

This function can be an ordinary function, or it can be a generator function, so that when invoked, an iterator object is returned. Inside of this generator function, each entry can be provided by using `yield`.

`String`, `Array`, `TypedArray`, `Map`, `Set`, and `Intl.Segments` are all built-in iterables, because each of their prototype objects implements an `@@iterator` method. In addition, the `arguments` object and some DOM collection types such as `NodeList` are also iterables.

`String`'s default iterator returns the string's code points one by one:

```javascript
const someString = 'hi';
console.log(typeof someString[Symbol.iterator]); // "function"

const iterator = someString[Symbol.iterator]();
console.log(iterator + ''); // "[object String Iterator]"

console.log(iterator.next()); // { value: "h", done: false }
console.log(iterator.next()); // { value: "i", done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### The iterator protocol

The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated.

An object is an iterator when it implements a `next()` method with the following semantics:

_A function, with either zero arguments or one argument, that returns an object with at least the following two properties. If the `next()` method is called with one argument, that argument will be available to the `next()` method being invoked._

- `done` -- _Has the value false if the iterator was able to produce the next value in the sequence. (This is equivalent to not specifying the done property altogether.)_
Has the value true if the iterator has completed its sequence. In this case, value optionally specifies the return value of the iterator.
- `value` -- _Any JavaScript value returned by the iterator. Can be omitted when done is true._

_The `next()` method must always return an object with appropriate properties including done and value. If a non-object value gets returned (such as false or undefined), a `TypeError` (`"iterator.next() returned a non-object value"`) will be thrown._

NOTE: It is not possible to know reflectively whether a particular object implements the iterator protocol. However, it is easy to create an object that satisfies both the iterator and iterable protocols (as shown in the example below).

Doing so allows an iterator to be consumed by the various syntaxes expecting iterables. Thus, it is seldom useful to implement the Iterator Protocol without also implementing Iterable.

```javascript
// Satisfies both the Iterator protocol and Iterable
const myIterator = {
    next: function() {
        // ...
    },
    [Symbol.iterator]: function() { return this; }
};
```

However, when possible, it's better for `iterable[Symbol.iterator]` to return different iterators that always start from the beginning, like `Set.prototype[@@iterator]()` does.

&nbsp;

## Iterators

In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

- `value` -- The next value in the iteration sequence.
- `done` -- This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.

Once created, an iterator object can be iterated explicitly by repeatedly calling next(). Iterating over an iterator is said to consume the iterator, because it is generally only possible to do once. After a terminating value has been yielded additional calls to next() should continue to return {done: true}.

The most common iterator in JavaScript is the Array iterator, which returns each value in the associated array in sequence.

Here is an example. It allows creation of a simple range iterator which defines a sequence of integers from start (inclusive) to end (exclusive) spaced step apart. Its final return value is the size of the sequence it created, tracked by the variable iterationCount.

```javascript
// creating an iterator
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}
const it = makeRangeIterator(1, 10, 2);

// using the iterator
let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);
// [5 numbers returned, that took interval in between: 0 to 10]
```

```javascript
```

&nbsp;

## Generator functions

While custom iterators are a useful tool, their creation requires careful programming due to the need to explicitly maintain their internal state. Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the function* syntax.

When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword.

The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once.

We can now adapt the example from above. The behavior of this code is identical, but the implementation is much easier to write and read.

```javascript
function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
```

&nbsp;

## References

MDN: Statements and declarations (Iterations) -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements#iterations

MDN: Iteration protocols -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

MDN: Iterators and generators -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators
