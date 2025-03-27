// 90. Subsets II
// Solved
// Medium
// Topics
// Companies
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

function findSubset(arr) {
  let res = [];

  function backTracking(idx, sub) {
    res.push([...sub]);
    for (let i = idx; i < arr.length; i++) {
      if (i > idx && arr[i] == arr[i - 1]) continue;
      sub.push(arr[i]);
      backTracking(i + 1, sub);
      sub.pop();
    }
  }
  backTracking(0, []);
  return res;
}

console.log(findSubset([1, 2, 2]));
