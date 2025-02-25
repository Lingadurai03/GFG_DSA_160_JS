// Pairs with difference k
// Difficulty: EasyAccuracy: 22.41%Submissions: 56K+Points: 2
// Given an array arr[] of positive integers. Find the number of pairs of integers whose absolute difference equals to a given number k.
// Note: (a, b) and (b, a) are considered the same. Also, the same numbers at different indices are considered different.

// The answer is guaranteed to fit in a 32-bit integer.

// Examples:

// Input: arr[] = [1, 4, 1, 4, 5], k = 3
// Output: 4
// Explanation: There are 4 pairs with absolute difference 3, the pairs are {1, 4}, {1, 4}, {4, 1} and {1, 4}.
// Input: arr[] = [8, 16, 12, 16, 4, 0], k = 4
// Output: 5
// Explanation: There are 5 pairs with absolute difference 4, the pairs are {8, 12}, {8, 4}, {16, 12}, {12, 16}, {4, 0}.
// Constraints:
// 1 <= arr.size() <= 2*105
// 1 <= k <= 2*105
// 0 <= arr[i] <= 105

function countPairs(arr, k) {
  let map = new Map();

  let res = 0;
  for (let val of arr) {
    if (map.has(val - k)) {
      res += map.get(val - k);
    }
    if (map.has(val + k)) {
      res += map.get(val + k);
    }

    map.set(val, (map.get(val) || 0) + 1);
  }
  return res;
}

console.log(countPairs([1, 4, 1, 4, 5], 3));
