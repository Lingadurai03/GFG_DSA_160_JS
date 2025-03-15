// Histogram Max Rectangular Area
// Difficulty: HardAccuracy: 32.12%Submissions: 193K+Points: 8
// You are given a histogram represented by an array arr, where each element of the array denotes the height of the bars in the histogram. All bars have the same width of 1 unit.

// Your task is to find the largest rectangular area possible in the given histogram, where the rectangle can be formed using a number of contiguous bars.

// Examples:

// Input: arr[] = [60, 20, 50, 40, 10, 50, 60]
//  Largest-Rectangular-Area-in-a-Histogram
// Output: 100
// Explanation: We get the maximum by picking bars highlighted above in green (50, and 60). The area is computed (smallest height) * (no. of the picked bars) = 50 * 2 = 100.
// Input: arr[] = [3, 5, 1, 7, 5, 9]
// Output: 15
// Explanation:  We get the maximum by picking bars 7, 5 and 9. The area is computed (smallest height) * (no. of the picked bars) = 5 * 3 = 15.
// Input: arr[] = [3]
// Output: 3
// Explanation: In this example the largest area would be 3 of height 3 and width 1.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤ 104

// -------   Brute force  --------  Time O(n^2) And Space O(n)

// function maxHistogramArea(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     let count = 1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > val) {
//         count++;
//       } else {
//         break;
//       }
//     }
//     for (let k = i - 1; k >= 0; k--) {
//       if (arr[k] > val) {
//         count++;
//       } else {
//         break;
//       }
//     }
//     max = Math.max(max, count * val);
//   }
//   return max;
// }

// -------   Using Stack  --------  Time O(n) And Space O(n)

function maxHistogramArea(arr) {
  let stack = [];
  let n = arr.length;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      let top = stack.pop();

      let width = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;

      res = Math.max(res, arr[top] * width);
    }
    stack.push(i);
  }
  while (stack.length) {
    let top = stack.pop();
    let curEl = arr[top];

    let width = stack.length === 0 ? n : n - stack[stack.length - 1] - 1;
    res = Math.max(res, curEl * width);
  }
  return res;
}
console.log(maxHistogramArea([347, 411, 476, 253, 314, 495, 959, 158, 541]));
