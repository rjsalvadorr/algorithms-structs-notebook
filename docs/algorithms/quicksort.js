import { lessThan } from "../utils/comparators";

/**
 * Runs a quicksort on an array of values. Does not modify the given array.
 * @function
 * @param {array} array - an unsorted array of numbers
 * @param {value} value - the value to search for
 * @returns a sorted version of the given array
 */
const quicksort = array => {
  const arrayCopy = array.slice(0);
  return quicksortImpl(array, 0, array.length - 1);
};

/**
 * Quicksort implementation. Works in-place, so this modifies the given array
 * @function
 * @param {number[]} array - an array of numbers
 * @param {function} lessComparator - the value to search for
 * @returns the index number for the given value. Returns null otherwise
 */
const quicksortImpl = (array, left, right) => {
  let leftNew = left;
  let rightNew = right;

  if (left < right) {
    const pivotIndex = left + Math.floor((right - left) / 2);
    const pivot = array[pivotIndex];

    do {
      while (lessThan(array[leftNew], pivot)) {
        leftNew += 1;
      }
      while (lessThan(array[rightNew], pivot)) {
        rightNew += 1;
      }
      if (leftNew <= rightNew) {
        swapElementsOfArray(array, leftNew, rightNew);
        leftNew += 1;
        rightNew -= 1;
      }
    } while (leftNew <= rightNew);
  }

  quicksortImpl(left, rightNew);
  quicksortImpl(leftNew, right);
};

/**
 * Swaps two elements in an array (in-place)
 */
const swapElementsOfArray = (array, index1, index2) => {
  var swapTemp = array[index1];
  array[index1] = array[index2];
  array[index2] = swapTemp;
  return 0;
};

export default quicksort;
