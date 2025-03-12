// Minimum Removals for Target Sum
// Difficulty: MediumAccuracy: 45.79%Submissions: 1K+Points: 4
// You are given an array of positive integers arr[] and an integer k. In one operation, you can remove either the leftmost or the rightmost element from the array. After each operation, the size of arr[] will be reduced by one.

// Your task is to determine the minimum number of operations required to make the total sum of removed elements exactly equal to k. If it is not possible to achieve this, return -1.

// Examples:

// Input: arr[] = [3, 4, 1, 3, 2], k = 5
// Output: 2
// Explanation: Removing 3 from left and 2 from right gives a sum of 5 in 2 operations.
// Input: arr[] = [5, 3, 4, 6, 2], k = 6
// Output: -1
// Explanation: It is impossible to achieve the sum of removed elements as 6.
// Input: arr[] = [1, 1, 3, 1, 2], k = 4
// Output: 3
// Explanation: Removing 1, 1 from left and 2 from right gives a sum of 4 in 3 operation.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104
// 1 ≤ k ≤ arr.size()

function minimumRemovalsForTargetSum(arr, k) {
  let target = -k;

  for (let val of arr) {
    target += val;
  }

  let i = 0;
  let sum = 0;

  let maxLength = -1;

  if (target == 0) {
    return arr.length;
  }

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j];

    while (i < j && sum > target) {
      sum -= arr[i];
      i++;
    }

    if (sum == target) {
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  return maxLength === -1 ? -1 : arr.length - maxLength;
}

console.log(minimumRemovalsForTargetSum([3, 4, 1, 3, 2], 5));
