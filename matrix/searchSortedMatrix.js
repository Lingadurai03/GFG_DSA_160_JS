// Search in a sorted Matrix
// Difficulty: MediumAccuracy: 56.27%Submissions: 129K+Points: 4
// Given a strictly sorted 2D matrix mat[][] of size n x m and a number x. Find whether the number x is present in the matrix or not.
// Note: In a strictly sorted matrix, each row is sorted in strictly increasing order, and the first element of the ith row (i!=0) is greater than the last element of the (i-1)th row.

// Examples:

// Input: mat[][] = [[1, 5, 9], [14, 20, 21], [30, 34, 43]], x = 14
// Output: true
// Explanation: 14 is present in the matrix, so output is true.
// Input: mat[][] = [[1, 5, 9, 11], [14, 20, 21, 26], [30, 34, 43, 50]], x = 42
// Output: false
// Explanation: 42 is not present in the matrix.
// Input: mat[][] = [[87, 96, 99], [101, 103, 111]], x = 101
// Output: true
// Explanation: 101 is present in the matrix.
// Constraints:
// 1 <= n, m <= 1000
// 1 <= mat[i][j] <= 109
// 1 <= x <= 109

function solution(arr, k) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low + 1) / 2);
    let rowLen = arr[mid].length - 1;

    if (k >= arr[mid][0] && k <= arr[mid][rowLen]) {
      return binarySearch(arr[mid], k);
    }
    if (arr[mid][0] < k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low + 1) / 2);

    if (arr[mid] == k) {
      return true;
    }
    if (arr[mid] < k) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return false;
}

console.log(
  solution(
    [
      [30, 32, 57, 156],
      [251, 334, 346, 365],
    ],
    55,
  ),
);
