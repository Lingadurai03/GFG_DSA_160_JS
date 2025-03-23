// Largest rectangular sub-matrix whose sum is 0
// Difficulty: HardAccuracy: 45.28%Submissions: 37K+Points: 8Average Time: 30m
// Given a matrix mat[][]. Find the size of the largest sub-matrix whose sum is equal to zero. The size of a matrix is the product of rows and columns. A sub-matrix is a matrix obtained from the given matrix by deletion of several (possibly, zero or all) rows/columns from the beginning and several (possibly, zero or all) rows/columns from the end.

// Examples:

// Input: mat[][] = [[9, 7, 16, 5], [1, -6, -7, 3], [1, 8, 7, 9], [7, -2, 0, 10]]
// Output: 6
// Explanation:

// Input: mat[][] =  [[1, 2, 3], [-3, -2, -1], [1, 7, 5]]
// Output:  6
// Explanation:

// Input: mat[][] = [[1, -1], [-1, 1]]
// Output: 4
// Explanation: The largest sub-matrix with sum 0 is [[1, -1], [-1, 1]].
// Constraints:
// 1 <= mat.size(), mat[0].size() <= 100
// -1000 <= mat[][] <= 1000

class Solution {
  // Main function to find the largest rectangle sub-matrix with 0 sum.
  zeroSumSubmat(mat) {
    // code here
    const rows = mat.length;
    const cols = mat[0].length;

    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
      const temp = Array(cols).fill(0);

      for (let j = i; j < rows; j++) {
        for (let k = 0; k < cols; k++) {
          temp[k] += mat[j][k];
        }
        const len = this.maxzeroSumSubarray(temp);

        maxArea = Math.max(maxArea, (j - i + 1) * len);
      }
    }
    return maxArea;
  }
  maxzeroSumSubarray(arr) {
    let prefSum = 0;
    let maxLength = 0;

    const mp = new Map();

    for (let i = 0; i < arr.length; i++) {
      prefSum += arr[i];

      if (prefSum == 0) {
        maxLength = i + 1;
      }
      if (mp.has(prefSum)) {
        maxLength = Math.max(maxLength, i - mp.get(prefSum));
      } else {
        mp.set(prefSum, i);
      }
    }
    return maxLength;
  }
}
