import TestUtils from "../utils/test-utils";
import { lessThan } from "../utils/comparators";
const DEBUG_MODE_ENABLED = false;

/**
 * Runs a mergesort on an array of values. Does not modify the given array.
 * @function
 * @param {number[]} array - an unsorted array of numbers
 * @returns {number[]} a sorted version of the given array
 */
const mergesort = array => {
  TestUtils.print(
    "\n////////////////////////////////////////\n/////   MERGESORT   ////////////////////\n",
    DEBUG_MODE_ENABLED
  );
  const arrayCopy = array.slice(0);
  mergesortImpl(arrayCopy);
  return arrayCopy;
};

/**
 * Mergesort implementation. Works in-place, so this modifies the given array
 * @function
 * @param {number[]} array - an array of numbers
 */
const mergesortImpl = array => {
  const arrLength = array.length;

  if (arrLength === 1) {
    return;
  }

  // Split array on two halves.
  const mid = Math.floor(arrLength / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  TestUtils.print(
    `split ${JSON.stringify(array)}\ninto ${JSON.stringify(left)} and ${JSON.stringify(right)}\n`,
    DEBUG_MODE_ENABLED
  );

  // Sort two halves of split array
  mergesortImpl(left);
  mergesortImpl(right);

  // Merge two sorted arrays into one.
  merge(array, left, right);
};

/**
 * Merge function
 * @function
 * @param {number[]} array - original array of numbers to sort
 * @param {number[]} left - left array
 * @param {number[]} right - right array
 */
const merge = (array, left, right) => {
  let idx = 0;
  let shiftedValue;
  let shiftDirection;
  let debugMsg = "";

  // IMPLEMENTATION NOTES:
  // Array isn't really used, its values here are overwritten by the sorted values from
  // left and right arrays.

  debugMsg += `[merge start] array = ${JSON.stringify(array)}\nleft = ${JSON.stringify(left)}\nright = ${JSON.stringify(
    right
  )}\n`;

  while (left.length && right.length) {
    if (right[0] < left[0]) {
      debugMsg += "right element < left element\n";
      shiftedValue = right.shift();
      shiftDirection = "right";
    } else {
      debugMsg += "right element >= left element\n";
      shiftedValue = left.shift();
      shiftDirection = "left";
    }
    debugMsg += `    adding ${shiftedValue} to array from ${shiftDirection}\n`;
    array[idx++] = shiftedValue;
  }

  while (left.length) {
    shiftedValue = left.shift();
    debugMsg += `shifting ${shiftedValue} from left\n`;
    array[idx++] = shiftedValue;
  }
  while (right.length) {
    shiftedValue = right.shift();
    debugMsg += `shifting ${shiftedValue} from right\n`;
    array[idx++] = shiftedValue;
  }

  debugMsg += `[merge result] ${JSON.stringify(array)}`;
  TestUtils.print(debugMsg + "\n", DEBUG_MODE_ENABLED);
};

export default mergesort;
