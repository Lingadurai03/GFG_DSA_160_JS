// Longest Subarray with Majority Greater than K
// Difficulty: MediumAccuracy: 44.84%Submissions: 1K+Points: 4
// Given an array arr[] and an integer k, the task is to find the length of longest subarray in which the count of elements greater than k is more than the count of elements less than or equal to k.

// Examples:

// Input: arr[] = [1, 2, 3, 4, 1] , k = 2
// Output: 3
// Explanation: The subarray [2, 3, 4] or [3, 4, 1] satisfy the given condition, and there is no subarray of length 4 or 5 which will hold the given condition, so the answer is 3.
// Input: arr[] = [6, 5, 3, 4], k = 2
// Output: 4
// Explanation: In the subarray [6, 5, 3, 4], there are 4 elements > 2 and 0 elements <= 2, so it is the longest subarray.
// Constraints:
// 1 <= arr.size() <= 106
// 1 <= arr[i] <= 106
// 0 <= k <= 106

// Brute force

// function findLongestSubArray(arr, k) {
//   let res = 0;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = i; j < n; j++) {
//       if (arr[j] > k) {
//         count++;
//       } else {
//         count--;
//       }

//       if (count > 0) {
//         res = Math.max(res, j - i + 1);
//       }
//     }
//   }
//   return res;
// }

function findLongestSubArray(arr, k) {
  let n = arr.length;
  let preIdx = new Map();
  let sum = 0;
  let res = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i] > k ? 1 : -1;

    if (sum > 0) {
      res = i + 1;
    }

    if (!preIdx.has(sum)) {
      preIdx.set(sum, i);
    }

    if (preIdx.has(sum - 1)) {
      res = Math.max(res, i - preIdx.get(sum - 1));
    }
  }
  console.log(preIdx);
  return res;
}

console.log(findLongestSubArray([1, 2, 3, 4], 2));
