# Heap (data-structure)

In computer science, a **heap** is a specialized tree-based 
data structure that satisfies the heap property described
below.

In a *min heap*, if `P` is a parent node of `C`, then the
key (the value) of `P` is less than or equal to the
key of `C`.

![MinHeap](https://upload.wikimedia.org/wikipedia/commons/6/69/Min-heap.png)

In a *max heap*, the key of `P` is greater than or equal
to the key of `C`

![Heap](https://upload.wikimedia.org/wikipedia/commons/3/38/Max-Heap.svg)

The node at the "top" of the heap with no parents is 
called the root node.

## Javascript

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
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Heap_(data_structure))
- [YouTube](https://www.youtube.com/watch?v=t0Cq6tVNRBA&index=5&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
