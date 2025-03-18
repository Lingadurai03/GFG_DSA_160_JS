// Sum of Max of Subarrays
// Difficulty: HardAccuracy: 51.68%Submissions: 911+Points: 8Average Time: 30m
// Given an array arr[], the task is to find the sum of the maximum elements of every possible non-empty sub-arrays of the given array arr[].

// Note: The answer will always fit into 32 bit integer.

// Examples:

// Input: arr[] = [1, 3, 2]
// Output: 15
// Explanation: All possible non-empty subarrays of [1, 3, 2] are [1], [3], [2], [1, 3], [3, 2] and [1, 3, 2]. The maximum elements of the subarrays are 1, 3, 2, 3, 3, 3 respectively. The sum will be 15.
// Input: arr[] = [3, 1]
// Output: 7
// Explanation: All possible non-empty subarrays of [3, 1] are [3], [1] and [3, 1]. The maximum elements of the subarrays are 3, 1, 3 respectively. The sum will be 7.
// Input: arr[] = [8, 0, 1]
// Output: 26
// Explanation: All possible non-empty subarrays of [8, 0, 1] are [8], [0], [1], [8, 0], [0, 1] and [8, 0, 1]. The maximum elements of the subarrays are 8, 0, 1, 8, 1, 8 respectively. The sum will be 26.
// Constraints:
// 1 <= arr.size() <= 104
// 0 <= arr[i] <= 109

function sumOfMaxOfSubArrays(arr) {
  let n = arr.length;
  let stack = [];
  let left = Array(n).fill(0);
  let right = Array(n).fill(0);
  let res = 0;

  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }
    left[i] = stack.length ? i - stack[stack.length - 1] : i + 1;
    stack.push(i);
  }
  stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }

    right[i] = stack.length ? stack[stack.length - 1] - i : n - i;
    stack.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    res += arr[i] * left[i] * right[i];
  }
  return res;
}

console.log(sumOfMaxOfSubArrays([1, 3, 2]));
