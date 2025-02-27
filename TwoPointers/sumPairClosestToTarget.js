// Sum Pair closest to target
// Difficulty: EasyAccuracy: 44.75%Submissions: 58K+Points: 2
// Given an array arr[] and a number target, find a pair of elements (a, b) in arr[], where a<=b whose sum is closest to target.
// Note: Return the pair in sorted order and if there are multiple such pairs return the pair with maximum absolute difference. If no such pair exists return an empty array.

// Examples:

// Input: arr[] = [10, 30, 20, 5], target = 25
// Output: [5, 20]
// Explanation: As 5 + 20 = 25 is closest to 25.
// Input: arr[] = [5, 2, 7, 1, 4], target = 10
// Output: [2, 7]
// Explanation: As (4, 7) and (2, 7) both are closest to 10, but absolute difference of (2, 7) is 5 and (4, 7) is 3. Hence, [2, 7] has maximum absolute difference and closest to target.
// Input: arr[] = [10], target = 10
// Output: []
// Explanation: As the input array has only 1 element, return an empty array.
// Constraints:
// 1 <= arr.size() <= 2*105
// 0 <= target<= 2*105
// 0 <= arr[i] <= 105

function sumPairs(arr, target) {
  let res = [];
  let minDiff = Infinity;
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b);

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (Math.abs(sum - target) < minDiff) {
      res = [arr[left], arr[right]];
      minDiff = Math.abs(sum - target);
    } else if (Math.abs(sum - target == minDiff)) {
      if (arr[right] - arr[left] > res[1] - res[0]) {
        res = [arr[left], arr[right]];
      }
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}

console.log(sumPairs([10, 30, 20, 5], 25));
