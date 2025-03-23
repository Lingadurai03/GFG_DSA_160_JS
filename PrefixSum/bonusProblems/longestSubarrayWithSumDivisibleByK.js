// Longest subarray with sum divisible by K
// Difficulty: MediumAccuracy: 33.72%Submissions: 98K+Points: 4
// Given an array arr[] and a positive integer k, find the length of the longest subarray with the sum of the elements divisible by k.
// Note: If there is no subarray with sum divisible by k, then return 0.

// Examples :

// Input: arr[] = [2, 7, 6, 1, 4, 5], k = 3
// Output: 4
// Explanation: The subarray [7, 6, 1, 4] has sum = 18, which is divisible by 3.
// Input: arr[] = [-2, 2, -5, 12, -11, -1, 7], k = 3
// Output: 5
// Explanation: The subarray [2, -5, 12, -11, -1] has sum = -3, which is divisible by 3.
// Input: arr[] = [1, 2, -2], k = 2
// Output: 2
// Explanation: The subarray is [2, -2] has sum = 0, which is divisible by 2.

class Solution {
  longestSubarrayDivK(arr, k) {
    // your code here
    let preFixSum = 0;
    let n = arr.length;
    let map = new Map();
    let ans = 0;

    map.set(0, 0);

    for (let i = 0; i < n; i++) {
      preFixSum = (preFixSum + (arr[i] % k) + k) % k;

      if (map.has(preFixSum)) {
        ans = Math.max(ans, i + 1 - map.get(preFixSum));
      } else {
        map.set(preFixSum, i + 1);
      }
    }
    return ans;
  }
}
