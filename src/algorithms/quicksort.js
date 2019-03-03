import TestUtils from "../utils/test-utils";
import { lessThan } from "../utils/comparators";

/**
 * Runs a quicksort on an array of values. Does not modify the given array.
 * @function
 * @param {number[]} array - an unsorted array of numbers
 * @param {value} value - the value to search for
 * @returns {number[]} a sorted version of the given array
 */
const quicksort = array => {
  const arrayCopy = array.slice(0);
  // TestUtils.printVariables([
  //   { name: "array", value: array },
  //   { name: "arrayCopy", value: arrayCopy },
  //   { name: "arrayCopy.length", value: arrayCopy.length }
  // ]);
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
  // TestUtils.printVariables([
  //   { name: "array", value: array },
  //   { name: "left", value: left },
  //   { name: "right", value: right }
  // ]);
  let leftNew;
  let rightNew;

  if (left < right) {
    const pivotIndex = left + Math.floor((right - left) / 2);
    const pivot = array[pivotIndex];
    leftNew = left;
    rightNew = right;

    do {
      while (lessThan(array[leftNew], pivot)) {
        leftNew += 1;
      }
      while (lessThan(pivot, array[rightNew])) {
        rightNew -= 1;
      }
      if (leftNew <= rightNew) {
        swapElementsOfArray(array, leftNew, rightNew);
        leftNew += 1;
        rightNew -= 1;
      }
    } while (leftNew <= rightNew);

    console.log(
      `left = ${left}, leftNew = ${leftNew}, right = ${right}, rightNew = ${rightNew}`
    );
    quicksortImpl(array, left, rightNew);
    quicksortImpl(array, leftNew, right);
  }
};

/**
 * Swaps two elements in an array (in-place)
 */
const swapElementsOfArray = (array, index1, index2) => {
  const swapTemp = array[index1];
  array[index1] = array[index2];
  array[index2] = swapTemp;
  return 0;
};

export default quicksort;
