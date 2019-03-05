import TestUtils from "../utils/test-utils";
import binarySearch from "./binary-search";
import quicksort from "./quicksort";
import mergesort from "./mergesort";

beforeEach(() => {
  // set up tests
});

beforeEach(() => {
  // break down tests
});

describe("Array operations", () => {
  test("quicksort", () => {
    const inputArray = TestUtils.getUnsortedArray(20);
    const input = quicksort(inputArray);
    expect(TestUtils.isArraySorted(input)).toBe(true);
  });

  test("mergesort", () => {
    const inputArray = TestUtils.getUnsortedArray(20);
    const input = mergesort(inputArray);
    expect(TestUtils.isArraySorted(input)).toBe(true);
  });

  test("binary search", () => {
    const input = TestUtils.getSortedArray();
    const searchVal = -43;
    const expected = input.indexOf(searchVal);
    expect(binarySearch(input, searchVal)).toBe(expected);
  });
});
