// Equilibrium Point
// Difficulty: EasyAccuracy: 28.13%Submissions: 631K+Points: 2Average Time: 15m
// Given an array of integers arr[], the task is to find the first equilibrium point in the array.

// The equilibrium point in an array is an index (0-based indexing) such that the sum of all elements before that index is the same as the sum of elements after it. Return -1 if no such point exists.

// Examples:

// Input: arr[] = [1, 2, 0, 3]
// Output: 2
// Explanation: The sum of left of index 2 is 1 + 2 = 3 and sum on right of index 2 is 3.
// Input: arr[] = [1, 1, 1, 1]
// Output: -1
// Explanation: There is no equilibrium index in the array.
// Input: arr[] = [-7, 1, 5, 2, -4, 3, 0]
// Output: 3
// Explanation: The sum of left of index 3 is -7 + 1 + 5 = -1 and sum on right of index 3 is -4 + 3 + 0 = -1.
// Constraints:
// 3 <= arr.size() <= 105
// -104 <= arr[i] <= 104

function findEquilibriumPoint(arr) {
  let n = arr.length;
  let totalSum = 0;
  let leftSum = 0;

  for (let val of arr) {
    totalSum += val;
  }

  for (let i = 0; i < n; i++) {
    totalSum -= arr[i];

    if (leftSum == totalSum) return i;

    leftSum += arr[i];
  }
  return -1;
}

console.log(findEquilibriumPoint([1, 2, 0, 3]));
