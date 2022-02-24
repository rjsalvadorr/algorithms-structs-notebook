import Queue from "../lists/queue";
import TestUtils from "../utils/test-utils";
const DEBUG_MODE_ENABLED = false;

/**
 * Initializes callback functions for depth-first search
 * @function
 * @param {Object} callbacks - callbacks to initialize
 * @returns {function} the initiated callback
 */
function dfsInitCallbacks(callbacks = {}) {
  const initiatedCallback = callbacks;

  const stubCallback = () => {};
  const defaultAllowTraversal = () => true;

  initiatedCallback.allowTraversal = callbacks.allowTraversal || defaultAllowTraversal;
  initiatedCallback.enterNode = callbacks.enterNode || stubCallback;
  initiatedCallback.leaveNode = callbacks.leaveNode || stubCallback;

  return initiatedCallback;
}

/**
 * Recursive implementation of a depth-first search on a binary tree
 * @function
 * @param {Object} node - binary tree node
 * @param {Object} callbacks - original callbacks
 * @returns {number[]} a sorted version of the given array
 */
function depthFirstSearchImpl(node, callbacks) {
  callbacks.enterNode(node);
  let debugMsg = "";

  // traverse left
  if (node.left && callbacks.allowTraversal(node, node.left)) {
    debugMsg += `calling function on left (${node.left.value})\n`;
    depthFirstSearchImpl(node.left, callbacks);
  }

  // traverse right
  if (node.right && callbacks.allowTraversal(node, node.right)) {
    debugMsg += `calling function on right (${node.right.value})\n`;
    depthFirstSearchImpl(node.right, callbacks);
  }

  TestUtils.print(debugMsg, DEBUG_MODE_ENABLED);
  callbacks.leaveNode(node);
}

/**
 * Runs a depth-first search on a binary tree
 * @function
 * @param {Object} rootNode - binary tree node
 * @param {Object} origCallbacks - original callbacks
 * @returns {number[]} a sorted version of the given array
 */
function depthFirstSearch(rootNode, origCallbacks) {
  TestUtils.print("\n/////   DEPTH-FIRST SEARCH ////////////////////\n", DEBUG_MODE_ENABLED);

  const processedCallbacks = dfsInitCallbacks(origCallbacks);
  depthFirstSearchImpl(rootNode, processedCallbacks);
}

export default depthFirstSearch;
