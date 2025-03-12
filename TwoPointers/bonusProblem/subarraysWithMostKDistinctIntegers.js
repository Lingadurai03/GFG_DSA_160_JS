// Subarrays With At Most K Distinct Integers
// Difficulty: MediumAccuracy: 74.5%Submissions: 842+Points: 4
// You are given an array arr[] of positive integers and an integer k, find the number of subarrays in arr[] where the count of distinct integers is at most k.

// Note: A subarray is a contiguous part of an array.

// Examples:

// Input: arr[] = [1, 2, 2, 3], k = 2
// Output: 9
// Explanation: Subarrays with at most 2 distinct elements are: [1], [2], [2], [3], [1, 2], [2, 2], [2, 3], [1, 2, 2] and [2, 2, 3].
// Input: arr[] = [1, 1, 1], k = 1
// Output: 6
// Explanation: Subarrays with at most 1 distinct element are: [1], [1], [1], [1, 1], [1, 1] and [1, 1, 1].
// Input: arr[] = [1, 2, 1, 1, 3, 3, 4, 2, 1], k = 2
// Output: 24
// Explanation: There are 24 subarrays with at most 2 distinct elements.
// Constraints:
// 1 ≤ arr.size() ≤ 104
// 1 ≤ k ≤ arr.size()
// 1≤ arri  ≤ arr.size()

function findAtMostK(arr, k) {
  let res = 0;
  let dist = 0;

  let map = new Map();

  let i = 0;

  for (j = 0; j < arr.length; j++) {
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

console.log(findAtMostK([1, 2, 2, 3], 2));
