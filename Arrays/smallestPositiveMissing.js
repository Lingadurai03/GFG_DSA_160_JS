// Smallest Positive Missing
// Difficulty: MediumAccuracy: 25.13%Submissions: 392K+Points: 4
// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3
// Explanation: Smallest positive missing number is 3.
// Input: arr[] = [5, 3, 2, 5, 1]
// Output: 4
// Explanation: Smallest positive missing number is 4.
// Input: arr[] = [-8, 0, -1, -4, -3]
// Output: 1
// Explanation: Smallest positive missing number is 1.
// Constraints:
// 1 <= arr.size() <= 105
// -106 <= arr[i] <= 106

function smallestPositiveMissing(arr) {
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] >= 1 && arr[i] < arr.length && arr[i] != arr[arr[i] - 1]) {
      let temp = arr[i];
      arr[i] = arr[arr[i] - 1];
      arr[temp - 1] = temp;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 != arr[i]) {
      return i + 1;
    }
  }

  return arr.length + 1;
}

console.log(smallestPositiveMissing([1, 2, 3, 4, 5]));
