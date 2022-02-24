import TestUtils from "../utils/test-utils";
import { lessThan } from "../utils/comparators";
const DEBUG_MODE_ENABLED = false;

/**
 * Runs a quicksort on an array of values. Does not modify the given array.
 * @function
 * @param {number[]} array - an unsorted array of numbers
 * @param {value} value - the value to search for
 * @returns {number[]} a sorted version of the given array
 */
const quicksort = array => {
  TestUtils.print(
    "\n////////////////////////////////////////\n/////   QUICKSORT   ////////////////////\n",
    DEBUG_MODE_ENABLED
  );
  const arrayCopy = array.slice(0);
  const end = arrayCopy.length - 1;
  quicksortImpl(arrayCopy, 0, end);
  return arrayCopy;
};

/**
 * Quicksort implementation. Works in-place, so this modifies the given array
 * @function
 * @param {number[]} array - an array of numbers
 * @param {number} left - left number
 * @param {number} right - right number
 */
const quicksortImpl = (array, left, right) => {
  let leftNew;
  let rightNew;

  if (left < right) {
    const pivotIndex = left + Math.floor((right - left) / 2);
    const pivot = array[pivotIndex];
    leftNew = left;
    rightNew = right;
    let debugMsg = `left = ${left}, right = ${right}\npivotIndex = ${pivotIndex}, pivot = ${pivot}`;

    do {
      while (lessThan(array[leftNew], pivot)) {
        debugMsg = `${debugMsg}\n    array[${leftNew}] (${array[leftNew]}) < pivot, bumping up leftNew`;
        leftNew += 1;
        debugMsg = `${debugMsg} to ${leftNew}`;
      }
      while (lessThan(pivot, array[rightNew])) {
        debugMsg = `${debugMsg}\n    pivot < array[${rightNew}] (${array[rightNew]}), bumping down rightNew`;
        rightNew -= 1;
        debugMsg = `${debugMsg} to ${rightNew}`;
      }
      debugMsg = `${debugMsg}\nleftNew = ${leftNew}, rightNew = ${rightNew}`;
      if (leftNew <= rightNew) {
        debugMsg = `${debugMsg}\n    leftNew <= rightNew, swapping array[${leftNew}] (${array[leftNew]}) and array[${rightNew}] (${array[rightNew]})\n`;
        swapElementsOfArray(array, leftNew, rightNew);
        leftNew += 1;
        rightNew -= 1;
      }
      TestUtils.print(`${debugMsg}`, DEBUG_MODE_ENABLED);
    } while (leftNew <= rightNew);

    let debugMsg2 = `Sorting complete for this section.\nCalling quicksortImpl(array,${left},${rightNew})`;
    TestUtils.print(
      `${debugMsg2}\ncalling quicksortImpl(array,${leftNew},${right})\n---------------\n\n`,
      DEBUG_MODE_ENABLED
    );

    quicksortImpl(array, left, rightNew);
    quicksortImpl(array, leftNew, right);
  }
};

/**
 * Swaps two elements in an array (in-place)
 */
const swapElementsOfArray = (array, index1, index2) => {
  if (index1 === index2) {
    // indices are the same. No need to do anything.
    return 0;
  }
  const swapTemp = array[index1];
  array[index1] = array[index2];
  array[index2] = swapTemp;
  return 0;
};

export default quicksort;
