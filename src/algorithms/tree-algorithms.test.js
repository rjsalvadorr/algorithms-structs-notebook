import TestUtils from "../utils/test-utils";
import breadthFirstSearch from "./breadth-first-search";

let testTree = {};

beforeEach(() => {
  testTree = TestUtils.getPopulatedBinaryTree();
});

beforeEach(() => {
  // break down tests
});

describe("Tree operations", () => {
  it("should generate trees", () => {
    const treeValues = TestUtils.getUnsortedArray(20);
    const tree = TestUtils.getPopulatedBinaryTree(treeValues);

    expect(tree.contains(treeValues[0])).toBe(true);
    expect(tree.contains(treeValues[3])).toBe(true);
    expect(tree.contains(treeValues[11])).toBe(true);
    expect(tree.contains(treeValues[15])).toBe(true);
    expect(tree.contains(555111)).toBe(false);
  });

  it("should perform depth-first search", () => {
    const enterNodeCallback = node => {
      console.log(`entering node ${JSON.stringify(node)}`);
    };
    const leaveNodeCallback = node => {
      console.log(`leaving node ${JSON.stringify(node)}`);
    };

    breadthFirstSearch(testTree.root, {
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback
    });
  });
});
