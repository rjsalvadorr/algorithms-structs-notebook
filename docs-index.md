## Studying algorithms and data structures (implementation)

To go back to the main study notebook: [click here](../index.html).

To browse the code and documentation, use the nav menu to the right.

## Resources

 - [My advice on studying algorithms - Buck Shlegeris](http://shlegeris.com/2016/08/14/algorithms)
 - [How to pass a programming interview - Triplebyte](https://triplebyte.com/blog/how-to-pass-a-programming-interview)
 - [Interview Cake](https://www.interviewcake.com/) is an online course, starting at $149

## Canonical algorithms material

- List structures
    + arrays
    + dynamic arrays
    + linked lists
- Set and map structures
    + hash maps
    + binary search trees
    + heaps

For each of the data structures, you should know how all of its essential methods are implemented and their runtimes.

Essential methods for lists are:

- set
- get
- pushAtEnd
- popAtEnd
- insertByIndex
- removeByIndex

Essential methods for sets are

- insert
- remove
- contains

You should know how to write code that uses the implementation of the data structures; for example, you should be able to implement a `getNearestElementTo(x)` method which takes a binary search tree and searches for the closest value to `x` in the tree.  

Other notes on this:  

- You should know that your binary search tree implementations need to have logic for balancing, but it’s okay if you don’t know the details. (Optional material: if you want to quickly learn an implementation of self balancing BSTs check out treaps. If you want to understand how red-black trees work, learn about left-leaning red-black trees or 2-3-4 trees instead.)
- You should probably know that a queue can be implemented with two stacks

You should be able to implement all of the following algorithms:

- Graph algorithms
    + Breadth first search
    + depth first search
    + Dijkstra’s algorithm
- One fast sorting algorithm; I recommend mergesort or quicksort
- Binary search on an array. This one is super fiddly to get right and it’s worth writing the code even if you roughly understand the algorithm.

You should be roughly comfortable with Big O notation.

## Canonical algorithmic skills

Here are the most common central components of algorithms interview problems:

- Dynamic programming: learn it by reading Skiena chapter 8, or by reading the Cracking the Coding Interview chapter on this topic.
- Recursion: Cracking the Coding Interview has a great chapter on this.
- Iterating around and over the famous data structures. CtCI has good questions about this for each of the individual data structures. Eg for BSTs, you could refer to the CtCI tree chapter.
- Composing fast data structures for a problem. Here are some examples of this kind of problem.

## Non-technical aspects of succeeding at algorithm interviews

It’s worth practicing answering these questions under pressure, with a real human asking them to you. For more advice on this, see the Triplebyte blog post, particularly points 2, 3, and 7.
