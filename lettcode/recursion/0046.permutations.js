// 46. Permutations
// Medium
// Topics
// Companies
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

// function printAllPermutations(arr) {
//   let res = [];
//   let freq = [];

//   function backTracking(sub) {
//     if (sub.length == arr.length) {
//       res.push([...sub]);
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (!freq[i]) {
//         freq[i] = true;
//         sub.push(arr[i]);
//         backTracking(sub);
//         sub.pop();
//         freq[i] = false;
//       }
//     }
//   }
//   backTracking([]);

//   return res;
// }

function printAllPermutations(arr) {
  let ans = [];

  function backTracking(idx) {
    if (idx == arr.length) {
      ans.push([...arr]);
      return;
    }
    for (let i = idx; i < arr.length; i++) {
      swap(i, idx, arr);
      backTracking(idx + 1);
      swap(idx, i, arr);
    }
  }
  backTracking(0);

  return ans;
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(printAllPermutations([1, 2, 3]));
