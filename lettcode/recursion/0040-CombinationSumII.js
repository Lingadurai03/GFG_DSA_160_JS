// 40. Combination Sum II
// Medium
// Topics
// Companies
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output:
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output:
// [
// [1,2,2],
// [5]
// ]

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

function findCombination(arr, k) {
  let res = [];
  arr.sort((a, b) => a - b);

  function backTracking(idx, target, ds) {
    if (target == 0) {
      res.push([...ds]);
      return;
    }
    for (let i = idx; i < arr.length; i++) {
      if (i > idx && arr[i] === arr[i - 1]) continue;
      if (arr[i] > target) break;

      ds.push(arr[i]);
      backTracking(i + 1, target - arr[i], ds);
      ds.pop();
    }
  }
  backTracking(0, k, []);
  return res;
}

console.log(findCombination([10, 1, 2, 7, 6, 1, 5], 8));
