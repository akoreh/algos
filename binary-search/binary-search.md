# Binary Search

Binary search is an efficient algorithm for finding an element's index in a _sorted_ array. At each step it compares the target value to the middle element of the current search range and discards half of the remaining elements, giving a logarithmic runtime.

## Problem

Given a sorted array of integers and an integer `target`, return the index of `target` in the array. If the element is not found, return `-1`.

## Intuition

- Because the array is sorted, comparing the target to the middle element tells us which half (left or right) can still contain the target.
- If `arr[mid] == target` → return `mid`.
- If `arr[mid] < target` → the target must be in the right half (discard left half).
- If `arr[mid] > target` → the target must be in the left half (discard right half).
- Repeat until the range is empty.

Real-world analogy: looking up a word in a dictionary — you open near the middle and decide whether to go left or right.

## Complexity

- Time: `O(log N)` where `N` is the number of elements.
- Space: iterative `O(1)`, recursive `O(log N)` due to call stack.

## Implementations

### Iterative (JavaScript)

```javascript
function binarySearch(arr, target) {
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}
```

### Recursive (JavaScript)

```javascript
function binarySearchRecursive(arr, target, lo = 0, hi = arr.length - 1) {
  if (lo > hi) return -1;
  const mid = Math.floor((lo + hi) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, hi);
  return binarySearchRecursive(arr, target, lo, mid - 1);
}
```

## Notes & Tips

- Input must be sorted for binary search to work correctly.
- In languages with fixed-width integers, prefer `lo + (hi - lo) // 2` to avoid potential overflow.
- For insertion points (e.g., lower_bound / upper_bound), adjust comparisons and return values accordingly.

## Example

```javascript
const arr = [1, 3, 5, 7, 9];
const target = 7;
binarySearch(arr, target); // -> 3
```
