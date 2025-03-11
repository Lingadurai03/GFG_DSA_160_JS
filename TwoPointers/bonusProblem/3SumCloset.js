// 3 Sum Closest
// Difficulty: MediumAccuracy: 49.69%Submissions: 21K+Points: 4
// Given an array arr[] and an integer target, the task is to find the sum of three integers in arr[] such that the sum is closest to target.

// Note: If multiple sums are closest to target, return the maximum one.

// Examples:

// Input: arr[] = [-1, 2, 2, 4], target = 4
// Output: 5
// Explanation: All possible triplets
// [-1, 2, 2], sum = (-1) + 2 + 2 = 3
// [-1, 2, 4], sum = (-1) + 2 + 4 = 5
// [-1, 2, 4], sum = (-1) + 2 + 4 = 5
// [2, 2, 4], sum = 2 + 2 + 4 = 8
// Triplet [-1, 2, 2], [-1, 2, 4] and [-1, 2, 4] have sum closest to target, so return the maximum one, that is 5.
// Input: arr[] = [1, 10, 4, 5], target = 10
// Output: 10
// Explanation: All possible triplets
// [1, 10, 4], sum = (1 + 10 + 4) = 15
// [1, 10, 5], sum = (1 + 10 + 5) = 16
// [1, 4, 5], sum = (1 + 4 + 5) = 10
// [10, 4, 5], sum = (10 + 4 + 5) = 19
// Triplet [1, 4, 5] has sum = 10 which is closest to target.
// Constraints:
// 3 <= arr.size() <= 103
// -103 ≤ arr[i] ≤ 103
// -104 ≤ target ≤ 104

function threeSumCloset(arr, target) {
  let res = 0;
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(sum - target) < minDiff) {
        minDiff = Math.abs(sum - target);
        res = sum;
      } else if (Math.abs(sum - target) == minDiff) {
        res = Math.max(res, sum);
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}

console.log(threeSumCloset([-1, 2, 2, 4], 4));
