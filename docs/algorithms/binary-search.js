import TestUtils from "../utils/test-utils";
const DEBUG_MODE_ENABLED = false;

/**
 * Runs a binary search on an array of values
 * @function
 * @param {number[]} array - an array of numbers
 * @param {value} value - the value to search for
 * @returns {number} the index number for the given value. Returns null otherwise
 */
const binarySearch = (array, value) => {
  TestUtils.print(
    "\n////////////////////////////////////////////\n/////   BINARY SEARCH   ////////////////////\n",
    DEBUG_MODE_ENABLED
  );
  return binarySearchImpl(array, value, 0, array.length);
};

/**
 * Binary search implementation
 * @function
 * @param {array[]} array - an array of numbers
 * @param {value} value - the value to search for
 * @param {low} low - lowest index in array
 * @param {high} high - highest index in array
 * @returns {number|null} the index number for the given value. Returns null otherwise
 */
const binarySearchImpl = (array, value, low, high) => {
  if (high < low) {
    // value not found
    return null;
  }
  const mid = Math.floor((low + high) / 2);
  let debugMsg = `value = ${value}, low = ${low}, high = ${high}\nmid = ${mid}, midValue = ${array[mid]}`;
  if (array[mid] > value) {
    TestUtils.print(`${debugMsg}\nMid value > search value. Looking in the lower half.\n`, DEBUG_MODE_ENABLED);
    return binarySearchImpl(array, value, low, mid - 1);
  }
  if (array[mid] < value) {
    TestUtils.print(`${debugMsg}\nMid value < search value. Looking in the upper half.\n`, DEBUG_MODE_ENABLED);
    return binarySearchImpl(array, value, mid + 1, high);
  } else {
    TestUtils.print(`${debugMsg}\nValue found!\n`, DEBUG_MODE_ENABLED);
    return mid;
  }
};

export default binarySearch;
