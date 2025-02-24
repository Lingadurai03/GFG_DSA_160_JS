// Count Subarrays with given XOR
// Difficulty: MediumAccuracy: 58.86%Submissions: 30K+Points: 4
// Given an array of integers arr[] and a number k, count the number of subarrays having XOR of their elements as k.

// Examples:

// Input: arr[] = [4, 2, 2, 6, 4], k = 6
// Output: 4
// Explanation: The subarrays having XOR of their elements as 6 are [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], and [6]. Hence, the answer is 4.
// Input: arr[] = [5, 6, 7, 8, 9], k = 5
// Output: 2
// Explanation: The subarrays having XOR of their elements as 5 are [5] and [5, 6, 7, 8, 9]. Hence, the answer is 2.
// Input: arr[] = [1, 1, 1, 1], k = 0
// Output: 4
// Explanation: The subarrays are [1, 1], [1, 1], [1, 1] and [1, 1, 1, 1].
// Constraints:

// 1 ≤ arr.size() ≤ 105
// 0 ≤ arr[i] ≤105
// 0 ≤ k ≤ 105

//     ************     BruteForce Space O(n^2) and Time O(1)     ************

// function countSubArrayXOR(arr, k) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum ^= arr[j];

//       if (sum == k) {
//         res++;
//       }
//     }
//   }
//   return res;
// }

//     ************     Hashmap Space O(n) and Time O(n)     ************

// x ^ k = XR
// x ^ k ^ k = XR ^ k
// x = XR ^ k

function countSubArrayXOR(arr, k) {
  let map = new Map();
  map.set(0, 1);

  let sum = 0;
  let res = 0;

  for (let val of arr) {
    sum ^= val;

    let x = sum ^ k;

    if (map.has(x)) {
      res += map.get(x);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
}

console.log(countSubArrayXOR([4, 2, 2, 6, 4], 6));
