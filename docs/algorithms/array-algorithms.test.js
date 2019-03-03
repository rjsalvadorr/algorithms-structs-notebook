import TestUtils from "../utils/test-utils";
import binarySearch from "./binary-search";
import quickSort from "./quicksort";

beforeEach(() => {
  // set up tests
});

beforeEach(() => {
  // break down tests
});

describe("Array operations", () => {
  test("quicksort", () => {
    const inputArray = TestUtils.getUnsortedArray(10);
    const input = quickSort(inputArray);
    expect(TestUtils.isArraySorted(input)).toBe(true);
  });

  test("binary search", () => {
    const input = TestUtils.getSortedArray();
    const searchVal = -43;
    const expected = input.indexOf(searchVal);
    expect(binarySearch(input, searchVal)).toBe(expected);
  });
});
