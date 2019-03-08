import Queue from "../lists/queue";

/**
 * Initializes callback functions for breadth-first search
 * @function
 * @param {Object} callbacks - callbacks to initialize
 * @returns {function} the initiated callback
 */
function bfsInitCallbacks(callbacks = {}) {
  const initiatedCallback = callbacks;

  const stubCallback = () => {};
  const defaultAllowTraversal = () => true;

  initiatedCallback.allowTraversal = callbacks.allowTraversal || defaultAllowTraversal;
  initiatedCallback.enterNode = callbacks.enterNode || stubCallback;
  initiatedCallback.leaveNode = callbacks.leaveNode || stubCallback;

  return initiatedCallback;
}

/**
 * Implementation of a breadth-first search on a binary tree
 * @function
 * @param {Object} rootNode - binary tree node
 * @param {Object} origCallbacks - original callbacks
 * @returns {number[]} a sorted version of the given array
 */
function breadthFirstSearch(rootNode, origCallbacks) {
  const callbacks = bfsInitCallbacks(origCallbacks);
  const nodeQueue = new Queue();

  nodeQueue.enqueue(rootNode);

  let currentNode;
  while (!nodeQueue.isEmpty()) {
    currentNode = nodeQueue.dequeue();
    callbacks.enterNode(currentNode);

    // traverse left
    if (currentNode.left && callbacks.allowTraversal(currentNode, currentNode.left)) {
      nodeQueue.enqueue(currentNode.left);
    }

    // traverse right
    if (currentNode.right && callbacks.allowTraversal(currentNode, currentNode.right)) {
      nodeQueue.enqueue(currentNode.right);
    }

    callbacks.leaveNode(currentNode);
    console.log(`nodeQueue=${nodeQueue.toString()}`);
  }
}

export default breadthFirstSearch;
