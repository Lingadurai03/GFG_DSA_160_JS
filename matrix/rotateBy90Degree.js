// Rotate by 90 degree
// Difficulty: EasyAccuracy: 56.88%Submissions: 113K+Points: 2Average Time: 20m
// Given a square matrix mat[][] of size n x n. The task is to rotate it by 90 degrees in an anti-clockwise direction without using any extra space.

// Examples:

// Input: mat[][] = [[1, 2, 3],
//                 [4, 5, 6]
//                 [7, 8, 9]]
// Output: Rotated Matrix:
// [3, 6, 9]
// [2, 5, 8]
// [1, 4, 7]
// Input: mat[][] = [[1, 2],
//                 [3, 4]]
// Output: Rotated Matrix:
// [2, 4]
// [1, 3]
// Constraints:
// 1 ≤ n ≤ 102
// 0 <= mat[i][j] <= 103

function rotate(arr) {
  for (let i = 0; i < arr.length; i++) {
    reverse(arr[i], 0, arr[i].length - 1);
  }
  for (let row = 0; row < arr.length; row++) {
    for (let col = row; col < arr[row].length; col++) {
      let temp = arr[row][col];
      arr[row][col] = arr[col][row];
      arr[col][row] = temp;
    }
  }

  return arr;
}
function reverse(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
