// Sorted and Rotated Minimum
// Difficulty: EasyAccuracy: 40.57%Submissions: 141K+Points: 2
// A sorted array of distinct elements arr[] is rotated at some unknown point, the task is to find the minimum element in it.

// Examples:

// Input: arr[] = [5, 6, 1, 2, 3, 4]
// Output: 1
// Explanation: 1 is the minimum element in the array.
// Input: arr[] = [3, 1, 2]
// Output: 1
// Explanation: Here 1 is the minimum element.
// Input: arr[] = [4, 2, 3]
// Output: 2
// Explanation: Here 2 is the minimum element.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ 109

function sortedAndRotatedMinimum(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    if (arr[low] < arr[high]) {
      return arr[low];
    }
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}
console.log(sortedAndRotatedMinimum([4, 2, 3]));
