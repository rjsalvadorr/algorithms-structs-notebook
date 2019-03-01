/**
 * Implementation of a linked list node
 */
class LinkedListNode {
  /**
   * Create a node
   * @param {object} data - data to assign to a node
   * @param {object} nextNode - reference to next node in the linked list
   */
  constructor(data, nextNode) {
    this.data = data || null;
    this.nextNode = nextNode || null;
  }
}

export default LinkedListNode;
