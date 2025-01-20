// Max Circular Subarray Sum
// Difficulty: HardAccuracy: 29.37%Submissions: 143K+Points: 8
// Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.

// Examples:

// Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
// Output: 22
// Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
// Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
// Output: 23
// Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
// Input: arr[] = [-1, 40, -14, 7, 6, 5, -4, -1]
// Output: 52
// Explanation: Circular Subarray [7, 6, 5, -4, -1, -1, 40] has the maximum sum, which is 52.
// Constraints:
// 1 <= arr.size() <= 105
// -104 <= arr[i] <= 104

function maxCircularSubarraySum(arr) {
  let totalSum = arr[0];
  let curMaxSum = arr[0];
  let curMinSum = arr[0];
  let maxSum = arr[0];
  let minSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    curMaxSum = Math.max(curMaxSum + arr[i], arr[i]);
    maxSum = Math.max(curMaxSum, maxSum);

    curMinSum = Math.min(curMinSum + arr[i], arr[i]);
    minSum = Math.min(curMinSum, minSum);

    totalSum += arr[i];
  }
  let normalSum = maxSum;
  let circularSum = totalSum - minSum;

  if (totalSum == minSum) {
    return normalSum;
  }

  return Math.max(normalSum, circularSum);
}

console.log(maxCircularSubarraySum([-1, -2, -3]));
