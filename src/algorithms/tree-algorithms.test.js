import TestUtils from "../utils/test-utils";

let testTree = {};

beforeEach(() => {
  // set up tests
});

beforeEach(() => {
  // break down tests
});

describe("Tree operations", () => {
  test("tree generation", () => {
    const treeValues = TestUtils.getUnsortedArray(20);
    const tree = TestUtils.getPopulatedBinaryTree(treeValues);

    expect(tree.contains(treeValues[0])).toBe(true);
    expect(tree.contains(treeValues[3])).toBe(true);
    expect(tree.contains(treeValues[11])).toBe(true);
    expect(tree.contains(treeValues[15])).toBe(true);
    expect(tree.contains(555111)).toBe(false);
  });
});
