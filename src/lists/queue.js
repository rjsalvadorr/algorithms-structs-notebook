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
   * @param {number|string|Object} data - data to add to the queue
   */
  enqueue(data) {
    this.linkedList.append(data);
  }

  /**
   * Remove the element at the front of the queue (head of the linked list)
   * @return {number|string|Object} value of element at the front of the queue
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.data : null;
  }

  toString() {
    // Return string representation of the queue's linked list.
    return this.linkedList.toString();
  }
}

export default Queue;
