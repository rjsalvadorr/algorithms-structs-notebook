/**
 * Simple comparison function. It just assumes that "a" and "b" are strings or numbers.
 * @param {(string|number)} a - first item
 * @param {(string|number)} b - second item
 * @returns {number}
 */
export function simpleComparator(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}
