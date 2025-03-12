// 4 Sum - All Quadruples
// Difficulty: MediumAccuracy: 19.94%Submissions: 202K+Points: 4Average Time: 30m
// Given an array arr[] of integers and another integer target. Find all unique quadruples from the given array that sums up to target.

// Note: All the quadruples should be internally sorted, ie for any quadruple [q1, q2, q3, q4] it should be : q1 <= q2 <= q3 <= q4.

// Examples :

// Input: arr[] = [0, 0, 2, 1, 1], target = 3
// Output: [0, 0, 1, 2]
// Explanation: Sum of 0, 0, 1, 2 is equal to 3.
// Input: arr[] = [10, 2, 3, 4, 5, 7, 8], target = 23
// Output: [[2, 3, 8, 10], [2, 4, 7, 10], [3, 5, 7, 8]]
// Explanation: Sum of 2, 3, 8, 10 is 23, sum of 2, 4, 7, 10 is 23 and sum of 3, 5, 7, 8 is also 23.
// Input: arr[] = [0, 0, 2, 1, 1], target = 2
// Output: [0, 0, 1, 1]
// Explanation: Sum of 0, 0, 1, 1 is equal to 2.
// Constraints:
// 1 <= arr.size() <= 200
// -106 <= target <= 106
// -106 <= arr[i] <= 106

function findFourSumQuaduples(arr, target) {
  let res = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < arr.length; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;

      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];

        if (sum == target) {
          res.push([arr[i], arr[j], arr[left], arr[right]]);

          while (left < right && arr[left] == arr[left + 1]) {
            left++;
          }
          while (left < right && arr[right] == arr[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          console.log('called');
          right--;
        }
      }
    }
  }
  return res;
}

console.log(findFourSumQuaduples([0, 0, 2, 1, 1], 3));
