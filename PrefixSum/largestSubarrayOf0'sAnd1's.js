// Largest subarray of 0's and 1's
// Difficulty: EasyAccuracy: 32.96%Submissions: 118K+Points: 2Average Time: 20m
// Given an array arr of 0s and 1s. Find and return the length of the longest subarray with equal number of 0s and 1s.

// Examples:

// Input: arr[] = [1, 0, 1, 1, 1, 0, 0]
// Output: 6
// Explanation: arr[1...6] is the longest subarray with three 0s and three 1s.
// Input: arr[] = [0, 0, 1, 1, 0]
// Output: 4
// Explnation: arr[0...3] or arr[1...4] is the longest subarray with two 0s and two 1s.
// Input: arr[] = [0]
// Output: 0
// Explnation: There is no subarray with an equal number of 0s and 1s.
// Constraints:
// 1 <= arr.size() <= 105
// 0 <= arr[i] <= 1

// BruteForce O(n^2) space O(n)
// function findLargestSubArray(arr) {
//   let res = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let ones = 0;
//     let zeros = 0;

//     for (let j = i; j < arr.length; j++) {
//       ones = arr[j] == 1 ? ones + 1 : ones;
//       zeros = arr[j] == 0 ? zeros + 1 : zeros;

//       if (ones == zeros) {
//         res = Math.max(res, ones * 2);
//       }
//     }
//   }
//   return res;
// }

// optimal Time O(N) space O(N)  using hashmap and prefixSum

function findLargestSubArray(arr) {
  let map = new Map();
  let totalSum = 0;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] ? totalSum++ : totalSum--;

    if (totalSum == 0) {
      res = Math.max(res, i + 1);
    }

    if (map.has(totalSum)) {
      res = Math.max(res, i - map.get(totalSum));
    } else {
      map.set(totalSum, i);
    }
  }
  return res;
}
console.log(
  findLargestSubArray([
    0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
  ]),
);
