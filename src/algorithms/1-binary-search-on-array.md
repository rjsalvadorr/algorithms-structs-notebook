# Binary Search

In computer science, binary search, also known as half-interval 
search, logarithmic search, or binary chop, is a search algorithm 
that finds the position of a target value within a sorted 
array. Binary search compares the target value to the middle 
element of the array; if they are unequal, the half in which 
the target cannot lie is eliminated and the search continues 
on the remaining half until it is successful. If the search 
ends with the remaining half being empty, the target is not 
in the array.

Like many other search algorithms, Binary Search is an in-place algorithm. That means that it works directly on the original array without making any copies.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg)

## Javascript

```javascript
const binarySearch = (sortedArray, key) => {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}
```

## Complexity

**Time Complexity**: `O(log(n))` - since we split search area by two for every next iteration.

Binary Search really shines when we need to make repeated searches on large arrays. As previously mentioned, we needed only 4 comparisons (comparisons being the most intensive tasks of all search algorithms), for an array of 11 elements. However, if we had an array of 10,000,000 elements, we would only need to check 24 elements, i.e. 0.0002% of the entire array.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
