import BinarySearchTreeNode from "./binary-search-tree-node";

/**
 * Implementation of a binary search tree. Stolen from:
 * https://github.com/trekhleb/javascript-algorithms
 */
class BinarySearchTree {
  /**
   * @param {function} [nodeValueCompareFunction]
   */
  constructor(nodeValueCompareFunction) {
    this.root = new BinarySearchTreeNode(null, nodeValueCompareFunction);

    // Steal node comparator from the root.
    this.nodeComparator = this.root.nodeComparator;
  }

  /**
   * @param {number} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    return this.root.insert(value);
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  contains(value) {
    console.log(`\n\nSearching for ${value}...`);
    return this.root.contains(value);
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  remove(value) {
    return this.root.remove(value);
  }

  /**
   * @return {string}
   */
  toString() {
    return this.root.toString();
  }
}

export default BinarySearchTree;
