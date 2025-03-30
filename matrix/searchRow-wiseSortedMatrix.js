// Search in a row-wise sorted matrix
// Difficulty: EasyAccuracy: 51.77%Submissions: 37K+Points: 2
// Given a row-wise sorted 2D matrix mat[][] of size n x m and an integer x, find whether element x is present in the matrix.
// Note: In a row-wise sorted matrix, each row is sorted in itself, i.e. for any i, j within bounds, mat[i][j] <= mat[i][j+1].

// Examples :

// Input: mat[][] = [[3, 4, 9],[2, 5, 6],[9, 25, 27]], x = 9
// Output: true
// Explanation: 9 is present in the matrix, so the output is true.
// Input: mat[][] = [[19, 22, 27, 38, 55, 67]], x = 56
// Output: false
// Explanation: 56 is not present in the matrix, so the output is false.
// Input: mat[][] = [[1, 2, 9],[65, 69, 75]], x = 91
// Output: false
// Explanation: 91 is not present in the matrix.
// Constraints:
// 1 <= n, m <= 1000
// 1 <= mat[i][j] <= 105
// 1 <= x <= 105

const searchRowMatrix = (mat, x) => mat.some((row) => binarySearch(row, x));

const binarySearch = (arr, k) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === k) return true;
    if (arr[mid] < k) start = mid + 1;
    else end = mid - 1;
  }
  return false;
};

// const mat = [
//   [2, 5, 8, 12],
//   [14, 18, 22, 28],
//   [31, 36, 41, 47],
// ];
// const x = 19;

// console.log(searchRowMatrix(mat, x));

const mat = [
  [1, 4, 7, 10],
  [12, 15, 20, 25],
  [30, 35, 40, 45],
];
const x = 15;

console.log(searchRowMatrix(mat, x));
