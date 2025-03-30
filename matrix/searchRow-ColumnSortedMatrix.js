// Search in a Row-Column sorted matrix
// Difficulty: EasyAccuracy: 41.62%Submissions: 170K+Points: 2Average Time: 15m
// Given a 2D integer matrix mat[][] of size n x m, where every row and column is sorted in increasing order and a number x, the task is to find whether element x is present in the matrix.

// Examples:

// Input: mat[][] = [[3, 30, 38],[20, 52, 54],[35, 60, 69]], x = 62
// Output: false
// Explanation: 62 is not present in the matrix, so output is false.
// Input: mat[][] = [[18, 21, 27],[38, 55, 67]], x = 55
// Output: true
// Explanation: 55 is present in the matrix.
// Input: mat[][] = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], x = 3
// Output: true
// Explanation: 3 is present in the matrix.
// Constraints:
// 1 <= n, m <=1000
// 1 <= mat[i][j] <= 109
// 1<= x <= 109

function search(mat, x) {
  for (let i = 0; i < mat.length; i++) {
    if (binarySearch(mat[i], x)) {
      return true;
    }
  }
  return false;
}

function binarySearch(arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((right + left) / 2);

    if (arr[middle] == k) {
      return true;
    }

    if (arr[middle] > k) {
      right = middle - 1;
    } else left = middle + 1;
  }
  return false;
}
console.log(
  search(
    [
      [3, 30, 38],
      [20, 52, 54],
      [35, 60, 69],
    ],
    62,
  ),
);
