// Count Pairs whose sum is less than target
// Difficulty: EasyAccuracy: 53.13%Submissions: 34K+Points: 2Average Time: 20m
// Given an array arr[] and an integer target. You have to find the number of pairs in the array whose sum is strictly less than the target.

// Examples:

// Input: arr[] = [7, 2, 5, 3], target = 8
// Output: 2
// Explanation: There are 2 pairs with sum less than 8: (2, 5) and (2, 3).
// Input: arr[] = [5, 2, 3, 2, 4, 1], target = 5
// Output: 4
// Explanation: There are 4 pairs whose sum is less than 5: (2, 2), (2, 1), (3, 1) and (2, 1).
// Input: arr[] = [2, 1, 8, 3, 4, 7, 6, 5], target = 7
// Output: 6
// Explanation: There are 6 pairs whose sum is less than 7: (2, 1), (2, 3), (2, 4), (1, 3), (1, 4) and (1, 5).
// Constraints:
// 1 <= arr.size() <= 105
// 0 <= arr[i] <= 104
// 1 <= target <= 104

function countPairs(arr, target) {
  let count = 0;
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}
console.log(countPairs([10, 3, 4, 7, 1], 15));
