// Subarrays with sum K
// Difficulty: MediumAccuracy: 49.74%Submissions: 71K+Points: 4
// Given an unsorted array of integers, find the number of subarrays having sum exactly equal to a given number k.

// Examples:

// Input: arr = [10, 2, -2, -20, 10], k = -10
// Output: 3
// Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
// Input: arr = [9, 4, 20, 3, 10, 5], k = 33
// Output: 2
// Explaination: Subarrays: arr[0...2], arr[2...4] have sum exactly equal to 33.
// Input: arr = [1, 3, 5], k = 0
// Output: 0
// Explaination: No subarray with 0 sum.
// Constraints:

// 1 ≤ arr.size() ≤ 105
// -103 ≤ arr[i] ≤ 103
// -107 ≤ k ≤ 107

//     ************     BruteForce Space O(n^2) and Time O(1)     ************
// function subArrayWithSumK(arr, k) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];

//       if (sum == k) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

//     ************     Hashmap Space O(n) and Time O(n)     ************
function subArrayWithSumK(arr, k) {
  let map = new Map();
  let sum = 0;
  let res = 0;

  for (let val of arr) {
    sum += val;

    let rem = sum - k;

    if (sum === k) {
      res++;
    }
    if (map.has(rem)) {
      res += map.get(rem);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
}
console.log(subArrayWithSumK([1, 3, 5], -10));
