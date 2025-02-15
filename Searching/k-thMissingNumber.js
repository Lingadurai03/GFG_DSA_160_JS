// Kth Missing Positive Number in a Sorted Array
// Difficulty: MediumAccuracy: 53.02%Submissions: 32K+Points: 4
// Given a sorted array of distinct positive integers arr[], we need to find the kth positive number that is missing from arr[].

// Examples :

// Input: arr[] = [2, 3, 4, 7, 11], k = 5
// Output: 9
// Explanation: Missing are 1, 5, 6, 8, 9, 10… and 5th missing number is 9.
// Input: arr[] = [1, 2, 3], k = 2
// Output: 5
// Explanation: Missing are 4, 5, 6… and 2nd missing number is 5.
// Input: arr[] = [3, 5, 9, 10, 11, 12], k = 2
// Output: 2
// Explanation: Missing are 1, 2, 4, 6… and 2nd missing number is 2.
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= k <= 105
// 1 <= arr[i]<= 106

// function findMissingNumber(arr, k) {
//   let count = 0;
//   let cur = 0;

//   while (cur < k) {
//     count++;

//     if (!arr.includes(arr[count])) {
//       cur++;
//     }
//   }

//   return count;
// }

// function findMissingNumber(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > i + k) {
//       return i + k;
//     }
//   }

//   return k + arr.length;
// }

function findMissingNumber(arr, k) {
  let low = 0;
  let high = arr.length - 1;

  let res = arr.length + k;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] > mid + k) {
      res = mid + k;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
}

console.log(findMissingNumber([3, 5, 9, 10, 11, 12], 2));
