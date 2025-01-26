// Count Inversions
// Difficulty: MediumAccuracy: 16.93%Submissions: 620K+Points: 4
// Given an array of integers arr[]. Find the Inversion Count in the array.
// Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

// Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. If the array is already sorted then the inversion count is 0.
// If an array is sorted in the reverse order then the inversion count is the maximum.

// Examples:

// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3
// Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
// Input: arr[] = [2, 3, 4, 5, 6]
// Output: 0
// Explanation: As the sequence is already sorted so there is no inversion count.
// Input: arr[] = [10, 10, 10]
// Output: 0
// Explanation: As all the elements of array are same, so there is no inversion count.
// Constraints:
// 1 ≤ arr.size() ≤ 105
// 1 ≤ arr[i] ≤ 104

// Time O(n^2) Space O(1)
// function countInversion(arr) {
//   let res = 0;

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         res++;
//       }
//     }
//   }
//   return res;
// }
// console.log(countInversion([2, 4, 1, 3, 5]));

//Time  O(n log n) Space O(1)

function merge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  let arr1 = arr.slice(left, mid + 1);
  let arr2 = arr.slice(mid + 1, right + 1);

  let res = 0,
    i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      arr[k++] = arr1[i++];
    } else {
      arr[k++] = arr2[j++];
      res += n1 - i;
    }
  }

  while (i < n1) {
    arr[k++] = arr1[i++];
  }

  while (j < n2) {
    arr[k++] = arr2[j++];
  }
  return res;
}
function countInversion(arr, left, right) {
  let res = 0;

  if (left < right) {
    let mid = Math.floor(left + (right - left) / 2);

    res += countInversion(arr, left, mid);
    res += countInversion(arr, mid + 1, right);

    res += merge(arr, left, mid, right);
  }
  return res;
}

let arr = [2, 4, 1, 3, 5];
console.log(countInversion(arr, 0, arr.length - 1));
