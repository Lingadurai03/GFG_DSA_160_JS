// Minimum Number of K Consecutive Bit Flips
// Difficulty: HardAccuracy: 75.62%Submissions: 279+Points: 8
// Given a binary array arr[] and an integer k.

// A k-bit flip involves selecting a contiguous subarray of length k from arr[] and flipping all its bits - changing every 0 to 1 and every 1 to 0 simultaneously.

// Your task is to return the minimum number of k-bit flips needed to eliminate all 0s from the array. If it is impossible to achieve, return -1.

// Examples:

// Input: arr[] = [0, 1, 0], k = 1
// Output: 2
// Explanation: Flip arr[0], then flip arr[2].
// Input: arr = [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1], k = 2
// Output: 4
// Explanation: It requires 4 operations to change the whole array with 1.
// Select subarray [2, 3] and flip all bits resulting array will be [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1]
// Select subarray [4, 5] and flip all bits resulting array will be [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1]
// Select subarray [5, 6] and flip all bits resulting array will be [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1]
// Select subarray [6, 7] and flip all bits resulting array will be [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// Input: arr = [0, 0, 1, 1, 1, 0, 0], k = 3
// Output: -1
// Explanation: It is not possible to make above array all 1's by performing any number of the steps.
// Constraints:

// 1 <= arr.size() <= 105
// 1 <= k <= arr.size()

function findConsecutiveBitFlips(arr, k) {
  let q = [];
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    while (q.length && i > q[0] + k - 1) {
      q.shift();
    }

    if ((arr[i] + q.length) % 2 == 0) {
      if (i + k > arr.length) {
        return -1;
      }
      res++;
      q.push(i);
    }
  }
  return res;
}
console.log(findConsecutiveBitFlips([0, 1, 0], 1));
