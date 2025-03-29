// Set Matrix Zeroes
// Difficulty: MediumAccuracy: 52.54%Submissions: 34K+Points: 4
// You are given a 2D matrix mat[][] of size n×m. The task is to modify the matrix such that if mat[i][j] is 0, all the elements in the i-th row and j-th column are set to 0 and do it in constant space complexity.

// Examples:

// Input: mat[][] = [[1, -1, 1],
//                 [-1, 0, 1],
//                 [1, -1, 1]]
// Output: [[1, 0, 1],
//         [0, 0, 0],
//         [1, 0, 1]]
// Explanation: mat[1][1] = 0, so all elements in row 1 and column 1 are updated to zeroes.
// Input: mat[][] = [[0, 1, 2, 0],
//                 [3, 4, 5, 2],
//                 [1, 3, 1, 5]]
// Output: [[0, 0, 0, 0],
//         [0, 4, 5, 0],
//         [0, 3, 1, 0]]
// Explanation: mat[0][0] and mat[0][3] are 0s, so all elements in row 0, column 0 and column 3 are updated to zeroes.
// Constraints:
// 1 ≤ n, m ≤ 500
// - 231 ≤ mat[i][j] ≤ 231 - 1

// BruteForce
// function setZero(mat) {
//   for (let row = 0; row < mat[0].length; row++) {
//     for (let col = 0; col < mat.length; col++) {
//       if (!mat[row][col]) {
//         for (let i = 0; i < mat[0].length; i++) {
//           mat[i][col] = -1;
//           mat[col][i] = -1;
//         }
//       }
//     }
//   }
//   for (let row = 0; row < mat[0].length; row++) {
//     for (let col = 0; col < mat.length; col++) {
//       if (mat[row][col] == -1) {
//         mat[row][col] = 0;
//       }
//       d;
//     }
//   }
//   return mat;
// }
// Better
// function setZero(arr) {
//   let rowValue = Array(arr.length).fill(1);
//   let colValue = Array(arr[0].length).fill(1);

//   for (let row = 0; row < rowValue.length; row++) {
//     for (let col = 0; col < colValue.length; col++) {
//       if (!arr[row][col]) {
//         rowValue[row] = 0;
//         colValue[col] = 0;
//       }
//     }
//   }
//   for (let row = 0; row < rowValue.length; row++) {
//     for (let col = 0; col < colValue.length; col++) {
//       if (!rowValue[row] || !colValue[col]) {
//         arr[row][col] = 0;
//       }
//     }
//   }
//   return arr;
// }

// Optimal
function setZero(arr) {
  let firstValue = 1;
  let rowLength = arr.length;
  let colLength = arr[0].length;

  for (let row = 0; row < rowLength; row++) {
    if (arr[row][0] == 0) firstValue = 0;
    for (let col = 1; col < colLength; col++) {
      if (!arr[row][col]) {
        arr[row][0] = 0;
        arr[0][col] = 0;
      }
    }
  }
  for (let row = rowLength - 1; row >= 1; row--) {
    for (let col = colLength - 1; col >= 1; col--) {
      if (!arr[0][col] || !arr[row][0]) {
        arr[row][col] = 0;
      }
    }
  }

  if (!arr[0][0]) {
    for (let i = 0; i < colLength; i++) {
      arr[0][i] = 0;
    }
  }
  if (!firstValue) {
    for (let i = 0; i < rowLength; i++) {
      arr[i][0] = 0;
    }
  }
  return arr;
}
console.log(setZero([[2], [3], [1, 1, 5], [0, -1, -1]]));
