import { inspect } from "util";
import shuffle from "lodash/shuffle";
import { simpleComparator } from "./comparators";
import BinarySearchTree from "../graphs-and-trees/binary-search-tree";

/**
 * Utilities for running tests
 */
class TestUtils {
  /**
   * Returns an unsorted array of 100 number elements
   */
  static getUnsortedArray(length) {
    const array = [
      -6813,
      -4016,
      4411,
      7999,
      7124,
      -2441,
      -7997,
      -43,
      5009,
      -7265,
      -8225,
      2950,
      -4104,
      1077,
      9771,
      -3589,
      2544,
      -741,
      3581,
      4160,
      2558,
      7982,
      -906,
      5348,
      3820,
      5646,
      -5848,
      -9397,
      3549,
      1207,
      1530,
      -5391,
      8581,
      -9260,
      -1126,
      -1362,
      -3154,
      -1229,
      1464,
      -6918,
      -6718,
      858,
      -1759,
      5878,
      -704,
      -3280,
      7579,
      -820,
      8672,
      3241,
      -4909,
      3865,
      9089,
      -1746,
      -332,
      9654,
      -6546,
      -4432,
      -4409,
      6459,
      -4997,
      -1791,
      2441,
      8358,
      -9365,
      2536,
      -8400,
      -1119,
      -9321,
      9286,
      9649,
      -5560,
      1313,
      5378,
      9730,
      9952,
      6528,
      -4882,
      -3432,
      -4981,
      2588,
      -8244,
      3602,
      -6591,
      7388,
      4912,
      9776,
      9981,
      -1826,
      8902,
      -2574,
      -9195,
      9814,
      3593,
      -3032,
      -7788,
      -2983,
      -5879,
      6195,
      6967
    ];

    const calcLength = !length ? 100 : length;
    return shuffle(array).slice(0, calcLength - 1);
  }

  /**
   * Returns an sorted array of 100 number elements
   */
  static getSortedArray(length) {
    const sortedArray = this.getUnsortedArray(length);
    return sortedArray.sort(function(a, b) {
      return a - b;
    });
  }

  /**
   * Checks if an array is already sorted
   */
  static isArraySorted(array) {
    let isSorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        isSorted = false;
        break;
      }
    }

    return isSorted;
  }

  /**
   * Returns a binary tree that's populated with number values
   */
  static getPopulatedBinaryTree(values) {
    const valuesForTree = values || this.getSortedArray(20);
    const bTree = new BinarySearchTree(simpleComparator);

    for (let val of valuesForTree) {
      bTree.insert(val);
    }

    return bTree;
  }

  /**
   * Returns a weighted graph that's populated with number vertices and edges
   */
  static getPopulatedWeightedGraph() {
    return {};
  }

  /**
   * Formats objects to a debug string
   * @static
   * @param {Object[]}} nameValuePairs - name/value of variable to print
   * @return {string} debug string
   */
  static formatVariablesForDebug(nameValuePairs) {
    let msg = "";
    for (const nameValuePair of nameValuePairs) {
      msg += `${nameValuePair.name} = ${inspect(nameValuePair.value)}\n`;
    }
    return msg;
  }

  /**
   * Prints variables to the console.
   * @static
   * @param {Object[]}} nameValuePairs - name/value of variable to print
   */
  static printVariables(nameValuePairs, debugEnabled) {
    let msg = this.formatVariablesForDebug(nameValuePairs);
    this.print(msg, debugEnabled);
  }

  /**
   * Prints variables to the console.
   * @static
   * @param {string}} string - string to print
   * @param {boolean}} debugEnabled - debug variable flag
   */
  static print(string, debugEnabled) {
    if (debugEnabled) {
      console.log(string);
    }
  }
}

export default TestUtils;
