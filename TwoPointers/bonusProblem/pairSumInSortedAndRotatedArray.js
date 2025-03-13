// Pair Sum in a Sorted and Rotated Array
// Difficulty: MediumAccuracy: 36.81%Submissions: 3K+Points: 4
// Given an array of positive elements arr[] that is sorted and then rotated around an unknown point, the task is to check if the array has a pair with sum equals to a given target.

// Examples:

// Input: arr[] = [7, 9, 1, 3, 5], target = 6
// Output: true
// Explanation: arr[2] and arr[4] has sum equals to 6 which is equal to the target.
// Input: arr[] = [2, 3, 4, 1], target = 3
// Output: true
// Explanation: arr[0] and arr[3] has sum equals to 3 which is equal to the target.
// Input: arr[] = [10, 7, 4, 1], target = 9
// Output: false
// Explanation: There is no such pair exists in arr[] which sums to target.
// Constraints:
// 2 <= arr.size() <=106
// 1 <= arr[i] <= 106
// 1 <= target <= 106

// Time O(n) and O(n)
// function findPairs(arr, target) {
//   const sortedArr = arr.sort((a, b) => a - b);

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = sortedArr[left] + sortedArr[right];

//     if (sum == target) {
//       return true;
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return false;
// }

function findPairs(arr, target) {
  let n = arr.length;

  let idx = 0;
  for (let i = 0; i < n - 1; i++) {
    idx = i;

    if (arr[i] > arr[i + 1]) {
      break;
    }
  }
  if (arr[idx] <= arr[idx + 1]) {
    idx++;
  }
  let right = idx;
  let left = (idx + 1) % n;

  while (left != right) {
    let sum = arr[left] + arr[right];
    if (sum == target) {
      return true;
    } else if (sum < target) {
      left = (left + 1) % n;
    } else {
      right = (right - 1 + n) % n;
    }
  }
  return false;
}

console.log(
  findPairs(
    [1, 5, 5, 7, 7, 9, 9, 9, 10, 10, 10, 15, 16, 18, 18, 18, 19, 19],
    25,
  ),
);
