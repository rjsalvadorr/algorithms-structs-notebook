/**
 * Simple comparison function. It just assumes that "a" and "b" are strings or numbers.
 * @param {(string|number)} a - first item
 * @param {(string|number)} b - second item
 * @returns {number} 0 if args are equal. Returns -1 if "a < b", and 1 if "a > b"
 */
export function simpleComparator(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}

/**
 * Simple comparison function. It just assumes that "a" and "b" are strings or numbers.
 * @param {(string|number)} a - first item
 * @param {(string|number)} b - second item
 * @returns {boolean} true if a < b
 */
export function lessThan(a, b) {
  const result = a < b;
  return result;
}
