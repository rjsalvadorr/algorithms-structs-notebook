# Concurrency model and Event Loop

## JS Runtime

JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

### Stack

Function calls form a stack of frames.

```javascript
function foo(b) {
  let a = 10
  return a + b + 11
}

function bar(x) {
  let y = 3
  return foo(x * y)
}

const baz = bar(7) // assigns 42 to baz
```

Order of operations:

1. When calling bar, a first frame is created containing references to bar's arguments and local variables.
1. When bar calls foo, a second frame is created and pushed on top of the first one, containing references to foo's arguments and local variables.
1. When foo returns, the top frame element is popped out of the stack (leaving only bar's call frame).
1. When bar returns, the stack is empty.
Note that the arguments and local variables may continue to exist, as they are stored outside the stack — so they can be accessed by any nested functions long after their outer function has returned.

### Heap

Objects are allocated in a heap which is just a name to denote a large (mostly unstructured) region of memory.

### Queue

A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message.

At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use.

The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).

## Runtime queues

### Tasks Queue

A task is any JavaScript code which is scheduled to be run by the standard mechanisms such as initially starting to run a program, an event callback being run, or an interval or timeout being fired. These all get scheduled on the task queue.

Tasks get added to the task queue when:

- A new JavaScript program or subprogram is executed (such as from a console, or by running the code in a `<script>` element) directly.
- An event fires, adding the event's callback function to the task queue.
- A timeout or interval created with `setTimeout()` or `setInterval()` is reached, causing the corresponding callback to be added to the task queue.

The event loop driving your code handles these tasks one after another, in the order in which they were enqueued. The oldest runnable task in the task queue will be executed during a single iteration of the event loop. After that, microtasks will be executed until the microtask queue is empty, and then the browser may choose to update rendering. Then the browser moves on to the next iteration of event loop.

### Animation Callback Queue

Queue of `requestAnimationFrame()` callbacks.

### Microtasks Queue

At first the difference between microtasks and tasks seems minor. And they are similar; both are made up of JavaScript code which gets placed on a queue and run at an appropriate time. However, whereas the event loop runs only the tasks present on the queue when the iteration began, one after another, it handles the microtask queue very differently.

There are two key differences.

First, each time a task exits, the event loop checks to see if the task is returning control to other JavaScript code. If not, it runs all of the microtasks in the microtask queue. The microtask queue is, then, processed multiple times per iteration of the event loop, including after handling events and other callbacks.

Second, if a microtask adds more microtasks to the queue by calling `queueMicrotask()`, those newly-added microtasks execute before the next task is run. That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added.

_Warning: Since microtasks can themselves enqueue more microtasks, and the event loop continues processing microtasks until the queue is empty, there's a real risk of getting the event loop endlessly processing microtasks. Be cautious with how you go about recursively adding microtasks._

JavaScript promises and the Mutation Observer API both use the microtask queue to run their callbacks, but there are other times when the ability to defer work until the current event loop pass is wrapping up. In order to allow microtasks to be used by third-party libraries, frameworks, and polyfills, the `queueMicrotask()` method is exposed on the `Window` and `Worker` interfaces.

## Resources

MDN: The event loop -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

MDN: Microtasks (guide) -- https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide

MDN: Microtasks (in depth) -- https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth

What the heck is the event loop anyway? | Philip Roberts | JSConf EU -- https://www.youtube.com/watch?v=8aGhZQkoFbQ

Jake Archibald: In The Loop - JSConf.Asia -- https://www.youtube.com/watch?v=cCOL7MC4Pl0

Exploration of requestAnimationFrame execution mechanism -- https://segmentfault.com/a/1190000040945949/en
