// Subarrays with K Distinct Integers
// Difficulty: MediumAccuracy: 44.12%Submissions: 9K+Points: 4Average Time: 30m
// You are given an array arr[] of positive integers and an integer k, find the number of subarrays in arr[] where the count of distinct integers is exactly k.

// Note: A subarray is a contiguous part of an array.

// Examples:

// Input: arr[] = [1, 2, 2, 3], k = 2
// Output: 4
// Explanation: Subarrays formed with exactly 2 different integers are: arr[0..1], arr[0..2], arr[1..3] and arr[2..3].
// Input: arr[] = [3, 1, 2, 2, 3], k = 3
// Output: 4
// Explanation: Subarrays formed with exactly 3 distinct integers are: arr[0..2], arr[0..3], arr[0..4], arr[1..4].
// Input: arr[] = [1, 1, 1, 1], k = 2
// Output: 0
// Explanation: There is no subarray having exactly 2 distinct integers.
// Constraints:
// 1 ≤ arr.size() ≤ 104
// 1 ≤ k ≤ arr.size()
// 1≤ arri  ≤ arr.size()

function subArraysWithKDistinctIntegers(arr, target) {
  const val =
    findMostKDistinct(arr, target) - findMostKDistinct(arr, target - 1);
  return val;
}

function findMostKDistinct(arr, k) {
  let i = 0;
  let res = 0;
  let map = new Map();
  let dist = 0;

  for (let j = 0; j < arr.length; j++) {
    map.set(arr[j], (map.get(arr[j]) || 0) + 1);

    if (map.get(arr[j]) == 1) {
      dist++;
    }

    while (dist > k) {
      map.set(arr[i], map.get(arr[i]) - 1);

      if (map.get(arr[i]) == 0) {
        dist--;
      }
      i++;
    }
    res += j - i + 1;
  }

  return res;
}

console.log(subArraysWithKDistinctIntegers([1, 2, 2, 3], 2));
