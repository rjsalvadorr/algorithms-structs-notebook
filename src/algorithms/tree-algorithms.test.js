import { inspect } from "util";
import TestUtils from "../utils/test-utils";
import breadthFirstSearch from "./breadth-first-search";

let testTree = {};

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
    console.log("\n/////   BREADTH-FIRST SEARCH ////////////////////\n");

    const enterNodeCallback = node => {
      const parentVal = node.parent ? node.parent.value : "null";
      console.log(`entering node ${node.value} from ${parentVal}`);
    };
    const leaveNodeCallback = node => {
      // console.log(`leaving node ${node.value}`);
    };

    breadthFirstSearch(testTree.root, {
      enterNode: enterNodeCallback,
      leaveNode: leaveNodeCallback
    });
  });
});
