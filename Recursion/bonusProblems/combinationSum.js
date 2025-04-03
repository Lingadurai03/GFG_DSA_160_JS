// Combination Sum
// Difficulty: MediumAccuracy: 28.28%Submissions: 120K+Points: 4Average Time: 30m
// Given an array arr[] and a target, your task is to find all unique combinations in the array where the sum is equal to target. The same number may be chosen from the array any number of times to make target.

// You can return your answer in any order.

// Examples:

// Input: arr[] = [2, 4, 6, 8], target = 8
// Output: [[2 2 2 2] [2 2 4] [2 6] [4 4] [8]]
// Explanation: Total number of possible combinations are 5.
// Input: arr[] = [2, 7, 6, 5], target = 16
// Output: [[2 2 2 2 2 2 2 2] [2 2 2 2 2 6] [2 2 2 5 5] [2 2 5 7] [2 2 6 6] [2 7 7] [5 5 6]]
// Explanation: Total number of possible combinations are 7.
// Input: arr[] = [6, 5, 7], target = 8
// Output: []
// Explanation: There are no possible combinantions such that target sum is 8.
// Constraints:
// 1 <= arr.size() <= 30
// 2 <= arr[i] <= 40
// 2 <= target <= 40
// All arr[i] are distinct.

function solution(arr, target) {
  let res = [];

  function backTracking(idx, target, sub) {
    if (target == 0) {
      res.push([...sub]);
      return;
    }
    if (idx == arr.length) return;
    if (arr[idx] <= target) {
      sub.push(arr[idx]);
      backTracking(idx, target - arr[idx], sub);
      sub.pop();
    }
    backTracking(idx + 1, target, sub);
  }
  backTracking(0, target, []);
  return res;
}

console.log(solution([2, 4, 6, 8], 8));
