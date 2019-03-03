import LinkedListNode from "./linked-list-node";
import { simpleComparator } from "../utils/comparators";

/**
 * Implementation of a linked list
 */
class LinkedList {
  /**
   * Create a linked list
   * @param {function} comparator - comparator function used for sorting
   */
  constructor(comparator) {
    // if this isn't necessary, blow it up!
    this.comparator = comparator || simpleComparator;
    this.head = null;
    this.tail = null;
  }

  /**
   * Prepends a value towards the list's head
   * @param {*} value - value to prepend to list
   * @return {LinkedList}
   */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * Appends a value towards the list's tail
   * @param {*} value - value to append to list
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    // make the current tail point to the new node
    this.tail.nextNode = newNode;
    // attach new node to end of linked list
    this.tail = newNode;

    return this;
  }

  /**
   * Deletes the given value from the list
   * @param {*} value - value to delete from list
   * @return {LinkedListNode} node deleted from list
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    // if the head is being deleted, make its next node
    // the new head
    if (this.head && this.head.data === value) {
      deletedNode = this.head;
      this.head = this.head.nextNode;
      return deletedNode;
    }

    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.nextNode) {
        // If the next node has to be deleted, remove its
        // reference in the chain
        if (currentNode.nextNode.data === value) {
          deletedNode = currentNode.nextNode;
          currentNode.nextNode = currentNode.nextNode.nextNode;
        } else {
          currentNode = currentNode.nextNode;
        }
      }
    }

    // Check if tail has to be deleted
    if (this.tail.data === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * Finds the given value in the list
   * @param {*} value - value to find in list
   * @return {LinkedListNode} node containing value in the list
   */
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // if callback is spec'd, try to find node by callback
      if (callback && callback(currentNode.data)) {
        return currentNode;
      }

      // if value is spec'd, try to compare by value
      if (value !== undefined && currentNode.data === value) {
        return currentNode;
      }

      currentNode = currentNode.nextNode;
    }

    return null;
  }

  deleteTail(value) {
    return 0;
  }

  deleteHead(value) {
    return 0;
  }

  fromArray(value) {
    return 0;
  }

  toArray(value) {
    return 0;
  }

  reverse(value) {
    return 0;
  }
}

export default LinkedList;
