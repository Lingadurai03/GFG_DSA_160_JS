// Split array in three equal sum subarrays
// Difficulty: MediumAccuracy: 52.9%Submissions: 27K+Points: 4
// Given an array, arr[], determine if arr can be split into three consecutive parts such that the sum of each part is equal. If possible, return any index pair(i, j) in an array such that sum(arr[0..i]) = sum(arr[i+1..j]) = sum(arr[j+1..n-1]), otherwise return an array {-1,-1}.

// Note: Since multiple answers are possible, return any of them. The driver code will print true if it is correct otherwise, it will print false.

// Examples :

// Input:  arr[] = [1, 3, 4, 0, 4]
// Output: true
// Explanation: [1, 2] is valid pair as sum of subarray arr[0..1] is equal to sum of subarray arr[2..3] and also to sum of subarray arr[4..4]. The sum is 4, so driver code prints true.
// Input: arr[] = [2, 3, 4]
// Output: false
// Explanation: No three subarrays exist which have equal sum.
// Input: arr[] = [0, 1, 1]
// Output: false
// Constraints:
// 3 ≤ arr.size() ≤ 106
// 0 ≤ arr[i] ≤ 106

function splitArrayInThreeEqualSumSubArray(arr) {
  let res = [];
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total % 3 !== 0) {
    return [-1, -1];
  }
  let curSum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    curSum += arr[i];
    if (curSum == total / 3) {
      curSum = 0;
      res.push(i);
    }

    if (i == arr.length - 2 && res.length < 2) {
      return [-1, -1];
    }
  }
  return res;
}

console.log(splitArrayInThreeEqualSumSubArray([1, 2, 3, 4, 5]));
