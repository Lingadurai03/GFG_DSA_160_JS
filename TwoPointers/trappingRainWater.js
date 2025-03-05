// Trapping Rain Water
// Difficulty: HardAccuracy: 33.14%Submissions: 465K+Points: 8Average Time: 20m
// Given an array arr[] with non-negative integers representing the height of blocks. If the width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.

// Examples:

// Input: arr[] = [3, 0, 1, 0, 4, 0, 2]
// Output: 10
// Explanation: Total water trapped = 0 + 3 + 2 + 3 + 0 + 2 + 0 = 10 units.

// Input: arr[] = [3, 0, 2, 0, 4]
// Output: 7
// Explanation: Total water trapped = 0 + 3 + 1 + 3 + 0 = 7 units.
// Input: arr[] = [1, 2, 3, 4]
// Output: 0
// Explanation: We cannot trap water as there is no height bound on both sides.
// Input: arr[] = [2, 1, 5, 3, 1, 0, 4]
// Output: 9
// Explanation: Total water trapped = 0 + 1 + 0 + 1 + 3 + 4 + 0 = 9 units.

// Time O(n) Space O(n)

// function maxWater(arr) {
//   let leftMaxArr = [arr[0]];
//   let rightMaxArr = [arr[arr.length - 1]];

//   for (let i = 1; i < arr.length; i++) {
//     let max = Math.max(arr[i], leftMaxArr[leftMaxArr.length - 1]);
//     leftMaxArr.push(max);
//   }

//   for (let i = arr.length - 2; i >= 0; i--) {
//     let max = Math.max(arr[i], rightMaxArr[0]);
//     rightMaxArr.unshift(max);
//   }

//   let res = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let min = Math.min(leftMaxArr[i], rightMaxArr[i]);

//     let sum = min - arr[i];

//     if (sum > 0) {
//       res += sum;
//     }
//   }
//   return res;
// }

function maxWater(arr) {
  let ml = arr[0];
  let mr = arr[arr.length - 1];

  let l = 0,
    r = arr.length - 1;
  let res = 0;

  while (l < r) {
    if (arr[l] < arr[r]) {
      ml = Math.max(ml, arr[l]);
      if (ml > arr[l]) {
        res += ml - arr[l];
      }

      l++;
    } else {
      mr = Math.max(mr, arr[r]);
      if (mr > arr[r]) {
        res += mr - arr[r];
      }
      r--;
    }
    console.log(res);
  }

  return res;
}

console.log(maxWater([3, 0, 1, 0, 4, 0, 2]));
