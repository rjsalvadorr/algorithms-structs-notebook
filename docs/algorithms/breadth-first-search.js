import Queue from "../lists/queue";
import TestUtils from "../utils/test-utils";
const DEBUG_MODE_ENABLED = false;

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
  TestUtils.print("\n/////   BREADTH-FIRST SEARCH ////////////////////\n", DEBUG_MODE_ENABLED);

  const callbacks = bfsInitCallbacks(origCallbacks);
  const nodeQueue = new Queue();

  nodeQueue.enqueue(rootNode);
  TestUtils.print(`rootNode=${rootNode}`, DEBUG_MODE_ENABLED);

  let currentNode;
  let debugMsg = "";
  while (!nodeQueue.isEmpty()) {
    debugMsg = "";
    currentNode = nodeQueue.dequeue();
    callbacks.enterNode(currentNode);

    // traverse left
    if (currentNode.left && callbacks.allowTraversal(currentNode, currentNode.left)) {
      nodeQueue.enqueue(currentNode.left);
      debugMsg += `enqueuing left (${currentNode.left.value})\n`;
    }

    // traverse right
    if (currentNode.right && callbacks.allowTraversal(currentNode, currentNode.right)) {
      nodeQueue.enqueue(currentNode.right);
      debugMsg += `enqueuing right (${currentNode.right.value})\n`;
    }

    callbacks.leaveNode(currentNode);
    TestUtils.print(`${debugMsg}nodeQueue=${nodeQueue.toString()}`, DEBUG_MODE_ENABLED);
  }
}

export default breadthFirstSearch;
