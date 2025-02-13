// Peak element
// Difficulty: BasicAccuracy: 38.86%Submissions: 532K+Points: 1Average Time: 30m
// Given an array arr[] where no two adjacent elements are same, find the index of a peak element. An element is considered to be a peak if it is greater than its adjacent elements (if they exist). If there are multiple peak elements, return index of any one of them. The output will be "true" if the index returned by your function is correct; otherwise, it will be "false".

// Note: Consider the element before the first element and the element after the last element to be negative infinity.

// Examples :

// Input: arr = [1, 2, 4, 5, 7, 8, 3]
// Output: true
// Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].
// Input: arr = [10, 20, 15, 2, 23, 90, 80]
// Output: true
// Explanation: arr[1] = 20 and arr[5] = 90 are peak elements because arr[0] < arr[1] > arr[2] and arr[4] < arr[5] > arr[6].
// Input: arr = [1, 2, 3]
// Output: true
// Explanation: arr[2] is a peak element because arr[1] < arr[2] and arr[2] is the last element, so it has negative infinity to its right.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// -231 ≤ arr[i] ≤ 231 - 1

function findPeakElement(arr) {
  let n = arr.length - 1;

  if (arr.length == 1) {
    return 0;
  }
  if (arr[0] > arr[1]) {
    return 0;
  }

  if (arr[n] > arr[n - 1]) {
    return n;
  }

  let low = 0;
  let high = n;

  while (low <= high) {
    let mid = low + Math.floor(high - low) / 2;

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
      return mid;
    }
    if (arr[mid] > arr[mid + 1]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 0;
}
console.log(findPeakElement([1, 2, 4, 5, 7, 8, 3]));
