import TestUtils from "../utils/test-utils";
import breadthFirstSearch from "./breadth-first-search";

let testTree = {};
let DEBUG_MODE_ENABLED = false;

beforeEach(() => {
  const testVals = TestUtils.getSortedArray(16);
  testTree = TestUtils.getPopulatedBinaryTree(testVals);
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
    TestUtils.print("\n/////   BREADTH-FIRST SEARCH ////////////////////\n", DEBUG_MODE_ENABLED);

    const enterNodeCallback = node => {
      const parentVal = node.parent ? node.parent.value : "null";
      TestUtils.print(`entering node ${node.value} from ${parentVal}`, DEBUG_MODE_ENABLED);
    };
    const leaveNodeCallback = node => {
      // TestUtils.print(`leaving node ${node.value}`, DEBUG_MODE_ENABLED);
    };

    breadthFirstSearch(testTree.root, {
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback
    });
  });
});
