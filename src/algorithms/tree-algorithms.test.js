import TestUtils from "../utils/test-utils";
import breadthFirstSearch from "./breadth-first-search";
import depthFirstSearch from "./depth-first-search";

let testTree = {};
let DEBUG_MODE_ENABLED = true;

beforeEach(() => {
  const testVals = TestUtils.getUnsortedArray(16);
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

  it("should perform breadth-first search", () => {
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

  it("should perform depth-first search", () => {
    const enterNodeCallback = node => {
      const parentVal = node.parent ? node.parent.value : "null";
      TestUtils.print(`entering node ${node.value} from ${parentVal}`, DEBUG_MODE_ENABLED);
    };
    const leaveNodeCallback = node => {
      // TestUtils.print(`leaving node ${node.value}`, DEBUG_MODE_ENABLED);
    };

    depthFirstSearch(testTree.root, {
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback
    });
  });
});
