// Sort 0s, 1s and 2s
// Difficulty: MediumAccuracy: 50.58%Submissions: 743K+Points: 4
// Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

// You need to solve this problem without utilizing the built-in sort function.

// Examples:

// Input: arr[] = [0, 1, 2, 0, 1, 2]
// Output: [0, 0, 1, 1, 2, 2]
// Explanation: 0s 1s and 2s are segregated into ascending order.
// Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
// Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
// Explanation: 0s 1s and 2s are segregated into ascending order.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?
// Constraints:
// 1 <= arr.size() <= 106
// 0 <= arr[i] <= 2

function sortAsendingOrder(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      mid++;
      low++;
    } else if (mid == 1) {
      mid++;
    } else {
      [arr[high], arr[mid]] = [arr[mid], arr[high]];
      high--;
    }
  }

  return arr;
}

console.log(sortAsendingOrder([0, 1, 2, 0, 1, 2]));
