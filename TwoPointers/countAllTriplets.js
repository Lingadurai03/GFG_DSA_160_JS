// Count all triplets with given sum in sorted array
// Difficulty: MediumAccuracy: 48.57%Submissions: 49K+Points: 4
// Given a sorted array arr[] and a target value, the task is to count triplets (i, j, k) of valid indices, such that arr[i] + arr[j] + arr[k] = target and i < j < k.

// Examples:

// Input: arr[] = [-3, -1, -1, 0, 1, 2], target = -2
// Output: 4
// Explanation: Four triplets that add up to -2 are:
// arr[0] + arr[3] + arr[4] = (-3) + 0 + (1) = -2
// arr[0] + arr[1] + arr[5] = (-3) + (-1) + (2) = -2
// arr[0] + arr[2] + arr[5] = (-3) + (-1) + (2) = -2
// arr[1] + arr[2] + arr[3] = (-1) + (-1) + (0) = -2
// Input: arr[] = [-2, 0, 1, 1, 5], target = 1
// Output: 0
// Explanation: There is no triplet whose sum is equal to 1.
// Constraints:
// 3 ≤ arr.size() ≤ 104
// -105 ≤ arr[i], target ≤ 105

function countAllTriplets(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      //   console.log(sum);

      if (sum == target) {
        let ele1 = arr[left];
        let ele2 = arr[right];
        let leftCount = 0,
          rightCount = 0;

        while (left <= right && arr[left] == ele1) {
          left++;
          leftCount++;
        }
        while (left <= right && arr[right] == ele2) {
          right--;
          rightCount++;
        }
        console.log(leftCount, rightCount);

        if (ele1 == ele2) {
          count += (leftCount * (leftCount - 1)) / 2;
        } else {
          count += leftCount * rightCount;
        }
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}

console.log(countAllTriplets([-3, -1, -1, 0, 1, 2], -2));
