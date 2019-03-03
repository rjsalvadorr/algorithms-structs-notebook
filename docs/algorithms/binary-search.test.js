import TestUtils from "../utils/test-utils";
import binarySearch from "./binary-search";

beforeEach(() => {
  // set up tests
});

beforeEach(() => {
  // break down tests
});

describe("Binary search on array", () => {
  test("sorts arrays", () => {
    const input = TestUtils.getUnsortedArray();
    const expected = 3543521;
    expect(binarySearch(input)).toBe(expected);
  });
});
