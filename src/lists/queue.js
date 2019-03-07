import LinkedList from "./linked-list";

/**
 * RJ's implementation of a queue
 */
class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * @return {boolean} true if the queue is empty
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * Reads the element at the front of the queue without removing it
   * @return {number|string|Object} value of element at the front of the queue
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.data;
  }

  /**
   * Adds a new element to the back of the queue (tail of the linked list)
   * @param {number|string|Object} value - value to add to the queue
   */
  enqueue(value) {
    this.linkedList.append(value);
  }

  /**
   * Remove the element at the front of the queue (head of the linked list)
   * @return {number|string|Object} value of element at the front of the queue
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}

export default Queue;
