// Spirally traversing a matrix
// Difficulty: MediumAccuracy: 35.2%Submissions: 309K+Points: 4
// You are given a rectangular matrix mat[][] of size n x m, and your task is to return an array while traversing the matrix in spiral form.

// Examples:

// Input: mat[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
// Explanation:

// Input: mat[][] = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]
// Output: [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]
// Explanation: Applying same technique as shown above.
// Input: mat[][] = [[32, 44, 27, 23], [54, 28, 50, 62]]
// Output: [32, 44, 27, 23, 62, 50, 28, 54]
// Explanation: Applying same technique as shown above, output will be [32, 44, 27, 23, 62, 50, 28, 54].
// Constraints:
// 1 <= n, m <= 1000
// 0 <= mat[i][j]<= 100

function printEl(arr) {
  let left = 0;
  let right = arr[0].length - 1;
  let top = 0;
  let bottom = arr.length - 1;
  let ans = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      ans.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      ans.push(arr[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        ans.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        ans.push(arr[i][left]);
      }
      left++;
    }
  }
  return ans;
}

console.log(
  printEl([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ]),
);
