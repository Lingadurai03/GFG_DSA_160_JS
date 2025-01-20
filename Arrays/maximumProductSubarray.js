// Maximum Product Subarray
// Difficulty: MediumAccuracy: 18.09%Submissions: 425K+Points: 4
// Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

// Note: It is guaranteed that the output fits in a 32-bit integer.

// Examples

// Input: arr[] = [-2, 6, -3, -10, 0, 2]
// Output: 180
// Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.
// Input: arr[] = [-1, -3, -10, 0, 6]
// Output: 30
// Explanation: The subarray with maximum product is {-3, -10} with product = (-3) * (-10) = 30.
// Input: arr[] = [2, 3, 4]
// Output: 24
// Explanation: For an array with all positive elements, the result is product of all elements.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// -10  ≤  arr[i]  ≤  10

function maximusProductSubarray(arr) {
  let res = arr[0];
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let temp = Math.min(arr[i], Math.min(arr[i] * min, arr[i] * max));
    max = Math.max(arr[i], Math.max(arr[i] * min, arr[i] * max));
    min = temp;
    res = Math.max(res, max);
  }
  return res;
}

console.log(maximusProductSubarray([-2, 6, -3, -10, 0, 2]));
