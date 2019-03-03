import shuffle from "lodash/shuffle";

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
  static getSortedArray() {
    return [
      -9397,
      -9365,
      -9321,
      -9260,
      -9195,
      -8400,
      -8244,
      -8225,
      -7997,
      -7788,
      -7265,
      -6918,
      -6813,
      -6718,
      -6591,
      -6546,
      -5879,
      -5848,
      -5560,
      -5391,
      -4997,
      -4981,
      -4909,
      -4882,
      -4432,
      -4409,
      -4104,
      -4016,
      -3589,
      -3432,
      -3280,
      -3154,
      -3032,
      -2983,
      -2574,
      -2441,
      -1826,
      -1791,
      -1759,
      -1746,
      -1362,
      -1229,
      -1126,
      -1119,
      -906,
      -820,
      -741,
      -704,
      -332,
      -43,
      858,
      1077,
      1207,
      1313,
      1464,
      1530,
      2441,
      2536,
      2544,
      2558,
      2588,
      2950,
      3241,
      3549,
      3581,
      3593,
      3602,
      3820,
      3865,
      4160,
      4411,
      4912,
      5009,
      5348,
      5378,
      5646,
      5878,
      6195,
      6459,
      6528,
      6967,
      7124,
      7388,
      7579,
      7982,
      7999,
      8358,
      8581,
      8672,
      8902,
      9089,
      9286,
      9649,
      9654,
      9730,
      9771,
      9776,
      9814,
      9952,
      9981
    ];
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
  static getPopulatedBinaryTree() {
    return {};
  }

  /**
   * Returns a weighted graph that's populated with number vertices and edges
   */
  static getPopulatedWeightedGraph() {
    return {};
  }
}

export default TestUtils;
