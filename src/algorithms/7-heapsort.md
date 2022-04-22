# Heapsort

> Heap Sort is an in-place, non-stable, comparison-based sorting algorithm.

The heapsort algorithm can be divided into two parts.

In the first step, a heap is built out of the data (see Binary heap § Building a heap). The heap is often placed in an array with the layout of a complete binary tree. The complete binary tree maps the binary tree structure into the array indices; each array index represents a node; the index of the node's parent, left child branch, or right child branch are simple expressions. For a zero-based array, the root node is stored at index 0; if i is the index of the current node, then

```
  iParent(i)     = floor((i-1) / 2) where floor functions map a real number to the largest leading integer.
  iLeftChild(i)  = 2*i + 1
  iRightChild(i) = 2*i + 2
```

In the second step, a sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array. The heap is updated after each removal to maintain the heap property. Once all objects have been removed from the heap, the result is a sorted array.

Heapsort can be performed in place. The array can be split into two parts, the sorted array and the heap. The storage of heaps as arrays is diagrammed here. The heap's invariant is preserved after each extraction, so the only cost is that of extraction.

## Javascript

### Mapping a Heap to an Array

What we have defined and depicted as a heap up until this point is merely a diagram, a collection of circles and lines. To use this structure in a JavaScript-based computer program, we need to rework it into an array or a list.

Luckily, this is a fairly straightforward operation that mimics the way we build the heap in the first place. We read and shift the elements off of the heap into an array in the same order we have placed them into the heap: from left to right and level by level.
 
```javascript
class MaxHeap{
    constructor(){
        this.heap = [];
    }

    parentIndex(index){
        return Math.floor((index-1)/2);
    }

    leftChildIndex(index){
        return (2*index + 1);
    }

    rightChildIndex(index){
        return (2*index + 2);
    }

    swap(a, b) {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    insert(item) {
        this.heap.push(item);
        var index = this.heap.length - 1;
        var parent = this.parentIndex(index);
        while(this.heap[parent] && this.heap[parent] < this.heap[index]) {
            this.swap(parent, index);
            index = this.parentIndex(index);
            parent = this.parentIndex(index);
        }
    }

    delete() {
      var item = this.heap.shift();
      this.heap.unshift(this.heap.pop());
      var index = 0;
      var leftChild = this.leftChildIndex(index);
      var rightChild = this.rightChildIndex(index);
      while(this.heap[leftChild] && this.heap[leftChild] > this.heap[index] || this.heap[rightChild] > this.heap[index]){
          var max = leftChild;
          if(this.heap[rightChild] && this.heap[rightChild] > this.heap[max]){
              max = rightChild
          }
          this.swap(max, index);
          index = max;
          leftChild = this.leftChildIndex(max);
          rightChild = this.rightChildIndex(max);
      }
      return item;
  }
}

const heapSort = (arr) => {
    var sorted = [];
    var heap1 = new MaxHeap();
    
    for(let i=0; i<arr.length; i++){
        heap1.insert(arr[i]);
    }
    
    for(let i=0; i<arr.length; i++){
        sorted.push(heap1.delete());
    }
    return sorted;
}
```
