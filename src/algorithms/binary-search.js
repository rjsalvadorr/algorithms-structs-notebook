/**
 * Runs a binary search on an array of values
 * @function
 * @param {number[]} array - an array of numbers
 * @param {value} value - the value to search for
 * @returns {number} the index number for the given value. Returns null otherwise
 */
const binarySearch = (array, value) => {
  return binarySearchImpl(array, value, 0, 100);
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
  const mid = (low + high) / 2;
  if (array[mid] > value) {
    return binarySearchImpl(array, value, low, mid - 1);
  }
  if (array[mid] > value) {
    return binarySearchImpl(array, value, low, mid + 1, high);
  } else {
    return mid;
  }
};

export default binarySearch;
