// Longest Bounded-Difference Subarray
// Difficulty: MediumAccuracy: 58.27%Submissions: 19K+Points: 4
// Given an array of positive integers arr[] and a non-negative integer x, the task is to find the longest sub-array where the absolute difference between any two elements is not greater than x.
// If multiple such subarrays exist, return the one that starts at the smallest index.

// Examples:

// Input: arr[] = [8, 4, 2, 6, 7], x = 4
// Output: [4, 2, 6]
// Explanation: The sub-array described by index [1..3], i.e. [4, 2, 6] contains no such difference of two elements which is greater than 4.
// Input: arr[] = [15, 10, 1, 2, 4, 7, 2], x = 5
// Output: [2, 4, 7, 2]
// Explanation: The sub-array described by indexes [3..6], i.e. [2, 4, 7, 2] contains no such difference of two elements which is greater than 5.
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 109
// 0 <= x<= 109

function findLongestSubArray(arr, k) {
  let minQ = [];
  let maxQ = [];
  let start = 0;
  let end = 0;
  let resStart = 0;
  let resEnd = 0;

  while (end < arr.length) {
    while (minQ.length && arr[minQ[minQ.length - 1]] > arr[end]) {
      minQ.pop();
    }
    while (maxQ.length && arr[maxQ[maxQ.length - 1]] < arr[end]) {
      maxQ.pop();
    }
    minQ.push(end);
    maxQ.push(end);

    while (arr[maxQ[0]] - arr[minQ[0]] > k) {
      if (start == minQ[0]) minQ.shift();
      if (start == maxQ[0]) maxQ.shift();
      start++;
    }

    if (end - start > resEnd - resStart) {
      resStart = start;
      resEnd = end;
    }
    end++;
  }
  return arr.slice(resStart, resEnd + 1);
}

console.log(findLongestSubArray([8, 4, 2, 6, 7], 4));
