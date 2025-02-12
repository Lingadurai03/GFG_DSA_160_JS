// Search in Rotated Sorted Array
// Difficulty: MediumAccuracy: 37.64%Submissions: 254K+Points: 4
// Given a sorted and rotated array arr[] of distinct elements, the task is to find the index of a target key. Return -1 if the key is not found.

// Examples :

// Input: arr[] = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 3
// Output: 8
// Explanation: 3 is found at index 8.
// Input: arr[] = [3, 5, 1, 2], key = 6
// Output: -1
// Explanation: There is no element that has value 6.
// Input: arr[] = [33, 42, 72, 99], key = 42
// Output: 1
// Explanation: 42 is found at index 1.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 106
// 1 ≤ key ≤ 106

function search(arr, key) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === key) return mid;

    if (arr[low] < arr[mid]) {
      if (key >= arr[low] && key < arr[mid]) {
        high = mid;
        -1;
      } else {
        low = mid + 1;
      }
    } else {
      if (key > arr[mid] && key <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

console.log(search([5, 6, 7, 8, 9, 10, 1, 2, 3], 4));
